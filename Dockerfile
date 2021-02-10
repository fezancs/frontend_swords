FROM node:12.2.0
WORKDIR /usr/src/app
#COPY package.json package-lock.json ./
COPY . .
RUN npm install
RUN npm install -g @angular/cli

EXPOSE 4200
RUN ng serve 
