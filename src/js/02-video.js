import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStore = 'videoplayer-current-time';

function saveCurrentTime({ seconds }) {
    localStorage.setItem(localStore, seconds);
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));

const currentTime = localStorage.getItem(localStore);
if (currentTime) {
    player.setCurrentTime(currentTime);
};