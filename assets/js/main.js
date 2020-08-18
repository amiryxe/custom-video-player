// Create volume btn
let volumeBtn = document.createElement('span');
volumeBtn.innerHTML =
  '<button type="button" class="plyr__control" data-plyr="mute"><svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-volume"></use></svg></button>';

document.querySelector('.plyr__controls__item.plyr__volume').style =
  'display: none';

// open and close volume control
volumeBtn.addEventListener('mouseover', () => {
  document.querySelector('.plyr__controls__item.plyr__volume').style =
    'display: block';
});

// volumeBtn.addEventListener('mouseout', () => {
//   document.querySelector('.plyr__controls__item.plyr__volume').style =
//     'display: none';
// });

document
  .querySelector('.plyr__controls__item.plyr__volume')
  .addEventListener('mouseover', () => {
    document.querySelector('.plyr__controls__item.plyr__volume').style =
      'display: block';
  });

// document
//   .querySelector('.plyr__controls__item.plyr__volume')
//   .addEventListener('mouseout', () => {
//     document.querySelector('.plyr__controls__item.plyr__volume').style =
//       'display: none';
//   });

// force styles
document.querySelector('input[data-plyr=volume]').style =
  'background: rgb(32, 45, 58); padding: 15px !important; border-radius: 5px; width: 150px;';

document
  .querySelector('input[data-plyr=volume]')
  .classList.add('plyr__tooltip-volume');

document.querySelector('.plyr__controls__item.plyr__control').after(volumeBtn);
