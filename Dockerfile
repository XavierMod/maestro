FROM node:16.8-alpine3.11 as development

WORKDIR /usr/src/app/

COPY maestro-api/package*.json ./
# COPY maestro-api/tsconfig.build.json ./dist
# COPY maestro-api/tsconfig.json ./

RUN npm install --only=development

COPY ./maestro-api .

RUN npm run build

FROM node:16.8-alpine3.11 as production

WORKDIR /usr/src/app/

COPY maestro-api/package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]