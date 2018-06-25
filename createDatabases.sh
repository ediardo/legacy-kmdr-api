#!/bin/bash
action=$1

# this creates the sql database
restore_sql() {
  echo "Working on MariaDB instance"
  ./node_modules/.bin/sequelize db:migrate
  ./node_modules/.bin/sequelize  db:seed:all
  echo ""
}


restore_mongodb() {
  echo "Working on MongoDB instance"
  if [ ! -f $(pwd)/dumps/explainshell.tar.gz ]; then
    curl -o $(pwd)/dumps/explainshell.tar.gz https://s3.amazonaws.com/kommandr.com/explainshell.tar.gz
  fi
  docker run -d --name mongorestore_mongo --network kommandr_backend mongo
  echo "Copying database backup into container..."
  docker cp $(pwd)/dumps/explainshell.tar.gz mongorestore_mongo:/tmp
  echo "Decompressing database backup file..."
  docker exec -it mongorestore_mongo bash -c "tar xvzf /tmp/explainshell.tar.gz -C /tmp"
  echo "Restoring backup into kommandr-api_mongodb container..."
  docker exec -it mongorestore_mongo bash -c "mongorestore -d explainshell --host kommandr-api-mongodb /tmp/explainshell"
  docker rm -f mongorestore_mongo
}

case "$action" in
  sql)
    restore_sql
    ;;
  mongo|mongodb)
    restore_mongodb
    ;;
  all)
    restore_sql
    restore_mongodb
    ;;
  *)
    echo "Tell me what databases should I restore: sql|mongo|all"
esac


  

