'use strict';

const readline = require('readline');
const musicPlayer = require('./musicPlayer');

let rl;

const listen = () => {
    rl.question('What do you think of Node.js? ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`);
    musicPlayer.play(answer).then(
        listen
    );

    });
}

const close = () => {
    rl.close();
}

const start = () => {

    console.log('Starting RFID InputListener');
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    listen();


};


start();

