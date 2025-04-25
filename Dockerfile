FROM node:23-alpine3.20

WORKDIR /app

COPY package*.json ./
RUN npm install express

COPY ./app.js ./
COPY ./website ./website
COPY ./certs ./certs

EXPOSE 443

CMD ["node", "app.js"]
