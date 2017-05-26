FROM node:6-alpine

# install dependencies
RUN apk add --update cairo librsvg-dev python gcc make g++

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN mkdir -p /usr/share/fonts/
COPY fonts/* /usr/share/fonts/
RUN fc-cache -fv
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8001
CMD [ "npm", "start" ]
