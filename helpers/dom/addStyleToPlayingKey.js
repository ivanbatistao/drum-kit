const addStyleToPlayingKey = (event) => {
  const keyElement = document.querySelector(`[data-key="${event.keyCode}"]`);

  if (keyElement && !keyElement.classList.contains('playing')) {
    keyElement.classList.add('playing');
  }
};

export default addStyleToPlayingKey;
