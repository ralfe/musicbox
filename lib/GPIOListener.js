'use strict';

let Gpio = require('onoff').Gpio;

let buttonVolUp = new Gpio(17, 'in', 'rising');
let buttonVolDown = new Gpio(27, 'in', 'rising');
let buttonVolNext = new Gpio(4, 'in', 'both');

const player = require('./mpcPlayer');

let busy = false;

buttonVolUp.watch(function(err, value) {
  player.volUp();
});

buttonVolDown.watch(function(err, value) {
    if (busy) {
        return;
    }
    player.volDown();
    clearBusy();
});

function clearBusy() {
    setTimeout(() => {
        busy = false;
    }, 3000);
}

buttonVolNext.watch(function(err, value) {
    if (busy) {
        return;
    }
    busy = true;
    console.log("Next button pressed");
    player.next();
    clearBusy();
});

console.log("GPIO Listener ready")

module.exports = this;