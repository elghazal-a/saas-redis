'use strict';

var express = require('express');
var controller = require('./instance.controller');

var router = express.Router();

router.post('/new', controller.new);

module.exports = router;