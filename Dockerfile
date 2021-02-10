FROM node:12.2.0
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g @angular/cli

EXPOSE 4200
CMD ng serve 
