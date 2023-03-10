# Builds a LINUX server with node installed
FROM node:18

# This does the CD command
WORKDIR /usr/src/app

#Copies the package.json file before installing libraries. This copies package.json and package-lock.json
COPY package*.json ./

#Installs libraries
RUN npm install

# Copies the code into the server under usr/src/app
COPY . .

# Allows the container to listen on port 443
EXPOSE 443
CMD ["npm","run","start"]