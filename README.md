# Kommandr API service

The API backend service for kommandr.com.

## Prerequites
- A MongoDB instance
- A MariaDB server

## Installation
### Clone the project
```
$ git clone git@github.com:kommandr/api.git
 ```
 
### Install dependencies
```
$ cd api
$ npm install
```

### Configure database connections
Create the configuration files for the database and edit as appropiate
```
$ cd config/
$ cp config.json.example config.json
$ cp db.mongo.json.example db.mongo.json
$ cp db.sql.json.example db.sql.json
```

### Restore databases
**Important: the databases.sh assumes you are running two docker containers with the databases servers running on them. See docker-compose.dev.yml inside of the kommandr repo for more details**

#### Restoring the SQL Database
```
$ ./databases.sh restore --sql
Working on MariaDB instance
Searching for kommandr-latest.sql file in dumps/...
Copying backup into container...
Restoring backup into kommandr-api-sql container...
Successful restore...
```
#### Restoring the MongoDB Database
```
$ ./databases.sh restore --mongo
```
**You can learn more about the usage of databases.sh by using the `--help` option**
```
$ ./databases.sh --help
Usage: databases.sh COMMAND OPTIONS

An utility script that performs database restore and backup operations
against servers running in Docker containers.

This script assumes backup files are inside of the dumps/ directory

Options:
  --help,-h   prints this message
Commands:
  restore     restores the databases
  backup      backup the databases

```

## Development

### Start the development server
```
$ npm start
```

The development server will restart just after you modified a file


### View GraphiQL (Optional)
Go to http://localhost:5001/graphql

## Production
Pending...

## Troubleshooting
Pending...
