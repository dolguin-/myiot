
module.exports = Events;
	
function Events(params) {
  this.id = params.id;
  this.device_id = params.device_id;
  this.date_time = params.date_time;
  this.duracion = params.duracion;
  this.message = params.message;
  
  this.validate();
}

Events.prototype.validate = function() {
  if(!this.device_id){
    throw new Error('no device id was provided');
  }
};