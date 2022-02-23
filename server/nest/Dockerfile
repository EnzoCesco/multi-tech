FROM node:14-alpine As development

WORKDIR /usr/src/app

COPY ./server/nest/package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine As production

WORKDIR /usr/src/app

COPY ./server/nest/package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]