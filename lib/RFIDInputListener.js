'use strict';

const readline = require('readline');
// const player = require('./musicPlayer');
const player = require('./mpcPlayer');

let rl;

const listen = () => {
    rl.question('Which command? ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`);
        if (answer === "next") {
            player.next();
        } else if (answer === "stop") {
            player.stop();
        } else if (answer === "up") {
            player.volUp();
        }else if (answer === "down") {
            player.volDown();
        }else {
            player.play(answer);
        }
        setTimeout(listen, 1000);

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

