'use strict';

var express = require('express');
var controller = require('./instance.controller');

var router = express.Router();

router.post('/new', controller.new);
router.get('/list', controller.list);

module.exports = router;