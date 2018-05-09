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
$ npm install --save
```

## Running kommandr.com locally

```shell
$ cd kommandr-api
```
#### Create Database
```shell
$ npm run migrate
```
#### Running Seeds
```shell
$ npm run seeds
```

#### Starting the web server
```shell
$ npm start
```

### View GraphiQL (Optional)
Go to http://localhost:5001/graphql

