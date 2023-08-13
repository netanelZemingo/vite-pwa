export const isIos = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const isOutsideBrowser = () => {
  return window.matchMedia("(display-mode: standalone)").matches;
};
