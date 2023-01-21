FROM node:16-alpine as build

WORKDIR /react
COPY package*.json ./
RUN npm install yarn
RUN yarn
COPY . .
# RUN npm run build

# FROM node:16-alpine

WORKDIR /react
COPY --from=build /react .

CMD ["npm", "run" ,"dev"]
