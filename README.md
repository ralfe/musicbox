.bashrc

    # Increase volume by 5%
    alias volu='sudo amixer set PCM -- $[$(amixer get PCM|grep -o [0-9]*%|sed 's/%//')+5]%'
    # Decrease volume by 5%
    alias vold='sudo amixer set PCM -- $[$(amixer get PCM|grep -o [0-9]*%|sed 's/%//')-5]%'
    
.bash_profile

    # Increase volume by 5%
    alias volu='sudo amixer set PCM -- $[$(amixer get PCM|grep -o [0-9]*%|sed 's/%//')+5]%'
    # Decrease volume by 5%
    alias vold='sudo amixer set PCM -- $[$(amixer get PCM|grep -o [0-9]*%|sed 's/%//')-5]%'
    
    
    /usr/bin/node /home/pi/musicbox/app.js

## mpc/mpd

Copy a folder from origin to remote

    scp Grimm/* pi@192.168.0.97:/var/lib/mpd/music/geschichten/GebrGrimm-30Beste
    
Update database on remote

    mpc update
    
Clear actual playlist

    mpc clear
    

Add all Files from one folder to playlist

    mpc add SpielUndBewegungslieder-30Beste/
    
Save playlist

    mpc save 0013828477
    