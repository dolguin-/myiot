'use strict';

var config = require('../config/database')[process.env.NODE_ENV || 'development'];
var database = config.connection.database;
delete config.connection.database;
var knex = require('knex')(config);

knex.raw('DROP DATABASE '+database).then(function(){
  knex.destroy();
}).catch(function(err){
  console.log(err);
  process.exit(0);
}).done();