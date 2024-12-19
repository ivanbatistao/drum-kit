const playAudio = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
};

window.addEventListener('keydown', (event) => {
  playAudio(event);
});
