FROM node:9
USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm i npm@latest -g
RUN npm install
EXPOSE 5001
