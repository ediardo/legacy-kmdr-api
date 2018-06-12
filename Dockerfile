FROM node:9
USER node
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
EXPOSE 5001
