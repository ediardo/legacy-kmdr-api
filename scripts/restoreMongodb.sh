#!/bin/bash
if [ ! -f $(pwd)/docker/mongodb/dumps/explainshell.tar.gz ]; then
  curl -o $(pwd)/docker/mongodb/dumps/explainshell.tar.gz https://s3.amazonaws.com/kommandr.com/explainshell.tar.gz
fi
docker create --name mongorestore mongo
docker cp $(pwd)/docker/mongodb/dumps/explainshell.tar.gz mongorestore:/tmp