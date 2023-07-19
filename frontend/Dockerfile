FROM node:18 AS react_app

WORKDIR /app

COPY package*.json ./

RUN npm install --include dev

COPY . .

EXPOSE 3030

CMD ["npm", "run", "start"]
