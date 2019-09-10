FROM node
MAINTAINER Gabo

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g --unsafe-perm loopback-cli
EXPOSE 3000 3001 3002
