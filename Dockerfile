FROM node:16.8-alpine3.11 As development

WORKDIR /usr/src/app/

COPY maestro-api/package*.json ../
COPY maestro-api/tsconfig.build.json ./
COPY maestro-api/tsconfig.json ../

RUN npm install --only=development

COPY . .

RUN npm run build
