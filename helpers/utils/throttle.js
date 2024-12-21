const throttle = (func, interval) => {
  let timeoutId;
  let isThrottle = false;

  return function (...args) {
    if (isThrottle) return;
    clearTimeout(timeoutId);
    func.apply(this, args);
    isThrottle = true;
    timeoutId = setTimeout(() => {
      isThrottle = false;
    }, interval);
  };
};

export default throttle;
