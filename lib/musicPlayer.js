'use strict';


const path = require('path');
const Sound = require('node-mpg123');

const	spawn = require('child_process').spawn;

const basePath = path.join(__dirname, '../music');

let music;

const play = (id) => {


    return new Promise( (resolve, reject) => {

        console.log(`Playing id: ${id}`);

        const pathToPlay = path.join(basePath, `${id}`);

        if(music) {
            music.kill('SIGTERM');
            music = undefined;
        }
        // let pathToPlay = `${pathToPlay}`;
        console.log(`Command to play: ${pathToPlay}`);
        music = spawn('mpg123', ["-C", "-@", "c.m3u"], {
            cwd: pathToPlay
        });

        music.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        music.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        music.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });

        setTimeout(function() {
            music.stdin.write('echo f');
        }, 2000);

        resolve();

    });
}

module.exports.play = play;