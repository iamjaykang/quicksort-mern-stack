# specify base image from dockerhub
FROM node:latest

LABEL version="1.0"
LABEL description="Development image for the Library MERN API"

# workdir is where our code shall live in the container
# all commands executed relative to this directory
WORKDIR /app

COPY package*.json ./

# Install dependencies and clear npm cache
RUN npm install && npm run build

COPY . .

# use EXPOSE command to have our port mapped by the docker daemon
EXPOSE 3080

# default dev command
CMD [ "npm","start" ]