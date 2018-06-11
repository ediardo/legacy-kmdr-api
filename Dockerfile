FROM node:8
USER node
RUN mkdir /home/node/.npm-global
RUN mkdir /home/node/app
WORKDIR /home/node/app
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV NODE_ENV=development
RUN npm i npm@latest -g
COPY package*.json ./
RUN npm -g --silent i 
RUN npm cache clean --force
