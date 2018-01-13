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

