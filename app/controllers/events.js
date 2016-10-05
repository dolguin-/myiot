var EventsRepo = require ('../repositories/events');
var EventsEntity = require('../entities/events');

var Knex = require('../../config/knex');
var db_config = require('../../config/database')[process.env.NODE_ENV || 'development'];

function Events(logger) {
	this.logger = logger;
}

module.exports = Events;


Events.prototype.EventsGet = function (req, res) {
	var events = new EventsRepo();
	events.find_by_id(req.params.event_id)
		.then(function (results) {
			if (results.length>0) {
				res.json(results);	
			} else {
				res.status(404).end();
			}
			
		}
	);
};

Events.prototype.EventsPost = function (req, res) {
	var events = new EventsRepo();
	var fields = {};
	fields.device_id = req.body.device_id;
	fields.date_time = req.body.date_time || Knex.fn.now();
	fields.duracion = req.body.duracion;
	fields.message = req.body.message;
	events.save(fields);
	res.json({status: 'ok'});
};
