#!/bin/bash
echo "Working on MariaDB instance"
docker exec kommandr-api ./node_modules/.bin/sequelize db:migrate
docker exec kommandr-api ./node_modules/.bin/sequelize db:seed:all
echo ""

echo "Working on MongoDB instance"
if [ ! -f $(pwd)/dumps/explainshell.tar.gz ]; then
  curl -o $(pwd)/dumps/explainshell.tar.gz https://s3.amazonaws.com/kommandr.com/explainshell.tar.gz
fi
docker run -d --name mongorestore --network kommandr_backend mongo
echo "Copying database backup into container..."
docker cp $(pwd)/dumps/explainshell.tar.gz mongorestore:/tmp
echo "Decompressing database backup file..."
docker exec -it mongorestore bash -c "tar xvzf /tmp/explainshell.tar.gz -C /tmp"
echo "Restoring backup into kommandr-api_mongodb container..."
docker exec -it mongorestore bash -c "mongorestore -d explainshell --host kommandr-api-mongodb /tmp/explainshell"
docker rm -f mongorestore
