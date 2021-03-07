FROM node:13.12.0-alpine

# set working directory
WORKDIR /myapp/back-app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /myapp/back-end/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent


# add app
COPY . ./

EXPOSE 9000

# start app
CMD ["npm", "start"]