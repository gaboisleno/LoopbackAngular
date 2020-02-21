FROM node
MAINTAINER Gabo

RUN mkdir -p /usr/src/app && npm install -g --unsafe-perm loopback-cli

WORKDIR /usr/src/app
EXPOSE 3000 3001 3002
