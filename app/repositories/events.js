var Knex = require('../../config/knex');
var Moment = require('moment');

var Events = require('../entities/events');

var db_config = require('../../config/database')[process.env.NODE_ENV || 'development'];

module.exports = EventsRepo;

function EventsRepo(logger) {
  this.logger = logger;
}

EventsRepo.prototype.find_by_id = function(id) {
  return Knex
    .select()
    .from('events')
    .where({
      id: id
    })
    .catch(function(err) {
      console.log(err);
    });
};

EventsRepo.prototype.save = function(params) {
  var event = new Events(params);
  console.log(event);
  return Knex
    .insert(event)
    .into('events')
    .catch(function(error) {
      console.error(error);
    })
    .then(function() {
      return Knex.select('*')
      .from('events')
      .where('id', 1);
    }).then(function(rows) {
      console.log(rows[0]);
    })
    .catch(function(error) {
      console.error(error);
    });
}