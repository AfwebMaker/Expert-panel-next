FROM node:18.13.0-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build app
RUN npm run build

# Start app
CMD [ "npm", "start" ]