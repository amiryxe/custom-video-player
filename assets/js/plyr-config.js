const player = new Plyr('#player', {
  controls: [
    'play-large',
    'play',
    'volume',
    'current-time',
    'progress',
    'duration',
    'rewind',
    'fast-forward',
    'captions',
    'settings',
    'fullscreen',
  ],
  i18n: {
    play: 'پخش',
    pause: 'توقف',
    enterFullscreen: 'تمام صفحه',
    exitFullscreen: 'خروج از تمام صفحه',
    settings: 'سرعت پخش',
    speed: 'انتخاب سرعت',
    normal: 'عادی',
    enableCaptions: 'فعال‌کردن زیرنویس',
    disableCaptions: 'غیرفعال‌کردن زیرنویس',
    rewind: '10 ثانیه به عقب‌',
    fastForward: '10 ثانیه به جلو',
  },

  seekTime: 10,
  hideControls: false,
  settings: ['speed'],
  tooltips: {
    controls: true,
    seek: true,
  },
});

(() => {
  const list = document.querySelector('.plyr');
  list.appendChild(list.firstElementChild);
})();
