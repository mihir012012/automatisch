FROM node:16-alpine as build
WORKDIR /project

RUN apk update && apk add yarn
COPY . .

# RUN ls
RUN yarn install
RUN yarn build:web
RUN yarn build:backend
RUN yarn build:cli

FROM node:16-alpine

WORKDIR /project
COPY --from=build /project .
EXPOSE 3000
EXPOSE 3001
CMD ["yarn","run", "start:worker"]