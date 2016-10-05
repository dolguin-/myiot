var DbEntity = require('../entities/dbentity');

module.exports = Events;

function Events(params) {
  this.table = 'eventos';
  this.fields = [
    'id',
    'device_id',
    'dateTime',
    'duracion',
    'message'
  ];
  DbEntity.call(this, params);
};

Events.prototype = Object.create(DbEntity.prototype);