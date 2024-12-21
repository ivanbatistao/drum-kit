const removePlayingStyle = (event) => {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
};

export default removePlayingStyle;
