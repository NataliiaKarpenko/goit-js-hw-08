import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const key = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(({ seconds }) => localStorage.setItem(key, seconds), 1000)
);

player.setCurrentTime(localStorage.getItem(key));
