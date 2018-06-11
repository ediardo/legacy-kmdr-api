![Logo](/logo.png)

# kommandr-api

The API backend service for kommandr.com.

## Installation

### Clone the project
```shell
$ git clone git@github.com:kommandr/kommandr-api.git
 ```
 
### Install dependencies
```shell
$ cd kommandr-api
$ npm install
```

## Running kommandr.com locally

```shell
$ cd kommandr-api
```
#### Build images
Build docker images specified in docker-compose.yml
```shell
$ docker-compose build
```

#### Start containers
Start the three services that run the API (GraphQL), MySQL and MongoDB servers.
```shell
$ docker-compose -p backend up
```

#### Run database migrations and seeds
Run the script below to run the database migrations and create the initial database state on MySQL and MongoDB
```shell
$ ./scripts/createDatabases.sh
```

### View GraphiQL (Optional)
Go to http://localhost:5001/graphql
