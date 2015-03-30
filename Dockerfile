FROM node:latest

COPY . /var/www
RUN cd /var/www;
RUN npm install;
RUN bower install;

EXPOSE  9000

WORKDIR /var/www

CMD ["npm", "start"]