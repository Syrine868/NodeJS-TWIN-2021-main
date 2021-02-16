const EventEmitter = require('events');
const emitter = new EventEmitter ();

//register a listner
emitter.on('messageLogged', function(){
    console.log("Listner called");
});

//raise an event
emitter.emit('messageLogged');