'use strict';


const path = require('path');
const Sound = require('node-mpg123');

const basePath = path.join(__dirname, '../music');

let music;

const play = (id) => {


    return new Promise( (resolve, reject) => {

        console.log(`Playing id: ${id}`);

        const titleToPlay = path.join(basePath, `${id}.mp3`);

        if(music) {
            music.stop();
        }
        music = new Sound(titleToPlay);
        music.play();

        music.on('complete', function () {
            music = undefined;
        });

        resolve();

    });
}

module.exports.play = play;