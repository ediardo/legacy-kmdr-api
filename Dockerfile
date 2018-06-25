FROM node:8
RUN apt-get update && apt-get install -y
USER node
RUN mkdir /home/node/api
WORKDIR /home/node/api
COPY ./ ./
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install npm@latest -g
RUN npm install
USER node
RUN mkdir /home/node/api/logs
EXPOSE 5001
