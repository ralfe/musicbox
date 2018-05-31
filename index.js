'use strict';

const path = require('path');
const { fork } = require('child_process');

// const GPIOListener = require('./lib/GPIOListener');

const rampUp = () => {

    console.log('---------------------------');
    console.log('starting musicbox');
    console.log('---------------------------');
    console.log('\n');

    // start RFID Listener in extra process
    fork(path.join(__dirname, 'lib/RFIDInputListener.js'));
}

rampUp();

