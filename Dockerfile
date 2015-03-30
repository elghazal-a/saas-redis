FROM node:0.10-onbuild

COPY . /var/www
RUN cd /var/www; npm install; bower install;

EXPOSE  9000

WORKDIR /var/www

CMD ["npm", "start"]