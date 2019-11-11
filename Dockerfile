FROM node:10.15.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install -g npm@3
RUN npm install -g npm@3 # again!
EXPOSE 3000
CMD ["npm", "start"]
