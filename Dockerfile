FROM node:10-alpine
USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node
COPY package.json package-lock.json /home/node/
RUN npm i -g ts-node
RUN npm install
COPY . /home/node
EXPOSE 3001
CMD [ "npm", "run", "start:dev"]