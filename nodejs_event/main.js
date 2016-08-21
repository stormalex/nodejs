var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('connect OK');
	
	eventEmitter.emit('data_received');		//trigger data_received event
}

eventEmitter.on('connected', connectHandler);		//register callback

eventEmitter.on('data_received', function() {		//register callback
	console.log('data received');
});

eventEmitter.emit('connected');		//trigger connected event

console.log('process done!');