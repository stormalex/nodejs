var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event', function(arg1, arg2) {
	console.log('some_event event trigger, callback 1', 'arg1=', arg1, 'arg2=', arg2);
})

eventEmitter.on('some_event', function(arg1) {
	console.log('some_event event trigger, callback 2', 'arg1=', arg1);
})

setTimeout(function(){
	eventEmitter.emit('some_event', 'arg1xxxx', 'arg2xxxx');		//trigger wither two args
}, 1000);