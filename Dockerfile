FROM node:8
RUN apt-get update && apt-get install -y
USER node
RUN mkdir /home/node/app
RUN mkdir /home/node/app/api
WORKDIR /home/node/app
COPY package*.json ./
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install npm@latest -g
RUN npm install
RUN npm install -g sequelize-cli
ENV NODE_PATH=/home/node/app/node_modules
EXPOSE 5001
