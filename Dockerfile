FROM node:10.15.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yum install -y epel-release
RUN yum install -y nodejs npm

# Upgrade node and npm to latest version
RUN npm cache clean
RUN npm install -g n
RUN n stable
RUN curl -L https://npmjs.org/install.sh | sh
EXPOSE 3000
CMD ["npm", "start"]
