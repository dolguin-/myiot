'use strict';
var express = require('express');
var Events = require('../controllers/events');

var events = new Events();
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'eventos' });
});

router.post('/event/', events.EventsPost);
router.get('/event/:event_id', events.EventsGet);

module.exports = router;