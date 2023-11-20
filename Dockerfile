FROM node:18.13.0-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm i --legacy-peer-deps

COPY . .

# Build app
RUN npm run build

# Start app
CMD [ "npm", "start" ]
