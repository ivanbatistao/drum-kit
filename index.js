import {
  playAudio,
  addStyleToPlayingKey,
  removePlayingKeyStyle,
} from './helpers/dom/index.js';

const handleKeydown = (event) => {
  playAudio(event);
  addStyleToPlayingKey(event);
  event.target.addEventListener('transitionend', removePlayingKeyStyle);
};

window.addEventListener('keydown', handleKeydown);
