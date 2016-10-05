FROM node:5.5

COPY package.json /myiot/

WORKDIR /myiot

RUN npm install

ADD . /myiot
