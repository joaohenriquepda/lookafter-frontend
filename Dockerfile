ARG NODE_VERSION=12.9
FROM node:$NODE_VERSION

# add more arguments from CI to the image so that `$ env` should reveal more info

ARG NG_CLI_VERSION=7.3.8

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm install -g @angular/cli@$NG_CLI_VERSION
RUN npm install -g firebase-tools

