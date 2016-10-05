
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
};
	
