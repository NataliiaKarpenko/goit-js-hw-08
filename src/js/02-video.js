import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(({ seconds }) => localStorage.setItem(currentTime, seconds), 1000)
);

const getCurrentTime = () => {
  if (localStorage.getItem(currentTime) === null) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(currentTime));
};

getCurrentTime();
