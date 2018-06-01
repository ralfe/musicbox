'use strict';

const spawn = require('child_process').spawn;
const exec = require('child_process').exec;

const command = (mpcCmd, props) => {
    let proc;
    if(props) {
        proc = spawn('mpc', [mpcCmd, props]);
    } else {
        proc = spawn('mpc', [mpcCmd]);
    }

    proc.stdout.on('data', (data) => {
        console.log(`${mpcCmd} stdout: ${data}`);
    });

    proc.stderr.on('data', (data) => {
        console.log(`${mpcCmd} stderr: ${data}`);
    });

    proc.on('close', (code) => {
        console.log(`${mpcCmd} child process exited with code ${code}`);
    });
}

const play = (id) => {

    return new Promise( (resolve, reject) => {

        console.log(`Playing id: ${id}`);

        command("clear");


        setTimeout(function() {
            command("load", id);
            setTimeout(function() {
                command("play");
            }, 1000);
        }, 100);

        resolve();

    });
};

const next = () => {


    return new Promise( (resolve, reject) => {

        console.log('Next song');

        command("next");

        resolve();

    });
};

const prev = () => {


    return new Promise( (resolve, reject) => {

        console.log('Next song');

        command("prev");

        resolve();

    });
};

const stop = () => {


    return new Promise( (resolve, reject) => {

        console.log('Stop all playback');

        command("stop");

        resolve();

    });
};

const volUp = () => {

    return new Promise( (resolve, reject) => {

        console.log('Volume up');

        command("volume", "+5");

        resolve();

    });
};

const volDown = () => {

    return new Promise( (resolve, reject) => {

        console.log('Volume down');

        command("volume", "-5");

        resolve();

    });
};

const init = () => {

    return new Promise( (resolve, reject) => {

        console.log('Init');

        command("repeat", "on");

        resolve();

    });
};
const shutdown = () => {

    return new Promise( (resolve, reject) => {

        console.log('shutdown');
        exec('sudo init 0', function (msg) { console.log(msg) });

        resolve();

    });
};

module.exports.play = play;
module.exports.next = next;
module.exports.prev = prev;
module.exports.stop = stop;
module.exports.volUp = volUp;
module.exports.volDown = volDown;
module.exports.init = init;
module.exports.shutdown = shutdown;