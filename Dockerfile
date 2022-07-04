FROM node:16.8-alpine3.11 As development

WORKDIR /usr/src/app/

COPY maestro-api/package*.json ./

RUN yarn add --only=development

COPY . .

RUN yarn start:prod
