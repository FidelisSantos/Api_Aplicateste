FROM node:16

WORKDIR /usr/src/path
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["node", "dist/main"]