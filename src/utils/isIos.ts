export const isIos = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const isInPwa = () => {
  return window.matchMedia("(display-mode: standalone)").matches;
};
