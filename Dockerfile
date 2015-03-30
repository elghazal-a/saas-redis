FROM node:latest

COPY . /var/www
RUN cd /var/www; npm install; bower install;

EXPOSE  9000

WORKDIR /var/www

CMD ["npm", "start"]