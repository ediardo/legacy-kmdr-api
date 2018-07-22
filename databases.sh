#!/bin/bash
command=$1
option=$2
default_sql_backup=kommandr-latest.sql
default_mongo_backup=explainshell.tar.gz

###############################################################################
#
# Main function for backing up databases
#
###############################################################################
backup() {
  # Prints the help 
  backup_usage() {
    echo "Usage: databases.sh backup OPTIONS"
    echo ""
    echo "An utility script that performs database restore and backup operations"
    echo "against servers running in Docker containers."
    echo ""
    echo "Backup operations"
    echo ""
    echo "Options:"
    echo "  --sql       backup the SQL database"
    echo "  --mongo     backup the MongoDB database"
    echo "  --help,-h   prints this message"
    echo ""
  }

  backup_sql() {
    backup_filename=kommandr-$(date +%Y%m%d_%H%M%S).sql
    echo "Working on MariaDB instance"
    echo "Connecting to database..."
    docker exec \
      -it kommandr-api-sql \
      bash -c "mysqldump -ukommandr -pk0mm4ndr -hkommandr-api-sql --databases kommandr > /tmp/$backup_filename"
    echo "Copying backup file to local..."
    docker cp kommandr-api-sql:/tmp/$backup_filename $(pwd)/dumps/
    echo "File $backup_filename saved in dumps/ directory"
    docker exec \
      -it kommandr-api-sql \
      bash -c "rm /tmp/$backup_filename"
  }

  backup_mongodb() {
    echo "Future..."
  }

  case $option in
    --sql)
      backup_sql
      ;;
    --mongo|--mongodb)
      backup_mongodb
      ;;
    --all)
      backup_sql
      backup_mongodb
      ;;
    --help|-h)
      usage
      ;;
    *)
      echo "Tell me what databases should I backup: sql|mongo|all"
      ;;
  esac
}

###############################################################################
#
# Main function for restoring databases
#
###############################################################################
restore() (
  # this creates the sql database
  restore_sql() {
    echo "Working on MariaDB instance"
    echo "Searching for $default_sql_backup file in dumps/..."  
    if [ ! -f $(pwd)/dumps/$default_sql_backup ]; then
      echo "Error: Could not find file $default_sql_backup in dumps/"
      exit 1
    fi  
    echo "Copying backup into container..."
    docker cp $(pwd)/dumps/$default_sql_backup kommandr-api-sql:/tmp
    echo "Restoring backup into kommandr-api-sql container..."
    docker exec \
      -it kommandr-api-sql \
      bash -c "mysql -ukommandr -pk0mm4ndr -hkommandr-api-sql < /tmp/$default_sql_backup"
    if [ $? -eq 0 ]; then
      echo "Successful restore..."
      return 0
    else 
      echo "Failed to restore the SQL database"
      return 1
    fi
  }

  # restores the mongo database
  restore_mongodb() {
    echo "Working on MongoDB instance"
    if [ ! -f $(pwd)/dumps/explainshell.tar.gz ]; then
      curl -o $(pwd)/dumps/explainshell.tar.gz https://s3.amazonaws.com/kommandr.com/explainshell.tar.gz
    fi
    echo "Copying database backup into container..."
    docker cp $(pwd)/dumps/explainshell.tar.gz kommandr-api-mongodb:/tmp
    echo "Decompressing database backup file..."
    docker exec \
      -it kommandr-api-mongodb \
      bash -c "tar xvzf /tmp/explainshell.tar.gz -C /tmp"
    echo "Restoring backup into kommandr-api-mongodb container..."
    docker exec \
      -it kommandr-api-mongodb \
      bash -c "mongorestore -d explainshell --host kommandr-api-mongodb /tmp/explainshell"
    if [ $? -eq 0 ]; then

      echo "Successful restore..."
      return 0
    else 
      echo "Failed to restore the MongoDB database"
      return 1;
    fi
  }

  # Prints the help 
  restore_usage() {
    echo "Usage: databases.sh restore OPTIONS"
    echo ""
    echo "An utility script that performs database restore and backup operations"
    echo "against servers running in Docker containers."
    echo ""
    echo "This script assumes backup files are inside of the dumps/ directory"
    echo ""
    echo "Options:"
    echo "  --sql       restores the SQL database, default dump file is kommandr-latest.sql"
    echo "  --mongo     restores the MongoDB database"
    echo "  --help,-h   prints this message"
    echo ""
  }

  case $option in
    --sql)
      restore_sql
      ;;
    --mongo|--mongodb)
      restore_mongodb
      ;;
    --all)
      restore_sql
      restore_mongodb
      ;;
    --help|-h)
      restore_usage
      ;;
    *)
      echo "Tell me what databases should I restore: sql|mongo|all"
      restore_usage
      ;;
  esac
)


global_usage() {
  echo "Usage: databases.sh COMMAND OPTIONS"
  echo ""
  echo "An utility script that performs database restore and backup operations"
  echo "against servers running in Docker containers."
  echo ""
  echo "This script assumes backup files are inside of the dumps/ directory"
  echo ""
  echo "Options:"
  echo "  --help,-h   prints this message"
  echo "Commands:"
  echo "  restore     restores the databases"
  echo "  backup      backup the databases"
}

case $command in 
  restore)
    restore
    ;;
  backup)
    backup
    ;;
  --help|-h)
    global_usage
    ;;
  *)
    echo "Tell me what operation you want to do"
    global_usage
    ;;
esac
