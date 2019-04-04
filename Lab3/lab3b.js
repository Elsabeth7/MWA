//solution for question # 2
const EventEmittter = require('events');
class Gym extends EventEmittter{
    constructor(){
        super();
    }
}

const athleteWorkOut = new Gym();
athleteWorkOut.on('boom',()=>{
    console.log('Athlete is working Out Now!');
});


setInterval(()=> athleteWorkOut.emit('boom'),1000);