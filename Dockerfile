FROM ubuntu:latest
USER root
WORKDIR /home/app
COPY ./package.json /home/app/package.json
RUN apt-get update
RUN apt-get install wget -y
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN wget https://nodejs.org/dist/v8.11.4/node-v8.11.4.tar.gz
RUN tar xvf node-v8.11.4.tar.gz
RUN make test
RUN make install
RUN apt-get -y install nodejs -g npm@5.6.0
RUN npm install -y
