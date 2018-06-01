'use strict';

let Gpio = require('onoff').Gpio;

let buttonVolUp = new Gpio(17, 'in', 'rising');
let buttonVolDown = new Gpio(27, 'in', 'rising');
let buttonNext = new Gpio(23, 'in', 'rising');
let buttonPrev = new Gpio(24, 'in', 'rising');
let buttonShutdown = new Gpio(25, 'in', 'rising');

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

buttonNext.watch(function(err, value) {
    if (busy) {
        return;
    }
    busy = true;
    console.log("Next button pressed");
    player.next();
    clearBusy();
});

buttonPrev.watch(function(err, value) {
    if (busy) {
        return;
    }
    busy = true;
    console.log("Prev button pressed");
    player.prev();
    clearBusy();
});

buttonShutdown.watch(function(err, value) {
    if (busy) {
        return;
    }
    busy = true;
    console.log("Shutdown button pressed");
    player.shutdown();
    clearBusy();
});

console.log("GPIO Listener ready")

module.exports = this;