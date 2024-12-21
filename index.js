import throttle from './helpers/utils/throttle.js';
import {
  playAudio,
  addStyleToPlayingKey,
  removePlayingKeyStyle,
} from './helpers/dom/index.js';

const handleKeydown = throttle((event) => {
  playAudio(event);
  addStyleToPlayingKey(event);
  event.target.addEventListener('transitionend', removePlayingKeyStyle);
}, 200);

window.addEventListener('keydown', handleKeydown);
