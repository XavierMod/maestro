FROM node:16.8-alpine3.11 as development

WORKDIR /usr/src/app/

COPY maestro-api/package*.json ./

RUN npm install --only=development

COPY ./maestro-api .

RUN npm run build

WORKDIR /usr/src/app/client

WORKDIR /usr/src/app/

COPY ./maestro-fe ./client

RUN cd ./client && npm ci && npm run build && cd ..

COPY ./client ./dist/build

FROM node:16.8-alpine3.11 as production

WORKDIR /usr/src/app/

COPY maestro-api/package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]