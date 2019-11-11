FROM node:10.15.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install npm@5.5.1
EXPOSE 3000
CMD ["npm", "start"]
