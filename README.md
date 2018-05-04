kommandr-api
============

The API backend service.
## Installation

### Clone the project
```shell
$ git clone git@github.com:kommandr/kommandr.git
 ```
 
### Install dependencies
```shell
$ cd kommandr-api
$ npm install --save
```

## Running kommandr.com locally
You need two terminal window/tabs opened #1 for backend and #2 for frontend. 

### Backend 
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

