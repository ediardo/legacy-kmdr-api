FROM node:8
USER node
RUN mkdir /home/node/api
WORKDIR /home/node/api
COPY package*.json ./
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV NODE_ENV=development
RUN npm i npm@latest -g
RUN npm install
EXPOSE 5001
