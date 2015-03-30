FROM node:0.10-onbuild

COPY . /var/www

RUN npm install -g bower
RUN cd /var/www; npm install; bower install;

EXPOSE  9000

WORKDIR /var/www

CMD ["npm", "start"]