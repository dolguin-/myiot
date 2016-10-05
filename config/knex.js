var config = require('../config/database')[process.env.NODE_ENV || 'development'];

module.exports = require('knex')(config);