FROM node:14.7.3

WORKDIR /app

COPY package.json package.json

COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD ["npm", "start"]