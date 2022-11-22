const animation = [
  'fade',
  'row_right_left',
  'row_top_button',
  'row_button_top',
  'row_left_right',
];
const delay = ['d0', 'd3000', 'd6000'];
let count = 0;
let button = document.querySelector('.click-me');

button.addEventListener('click', () => {
  const elements = document.querySelectorAll('.gallery__image');

  for (let i = 0; i < elements.length; i++) {
    elements[i].className =
      'gallery__image' + ' ' + 'animationnone' + ' ' + delay[i];
  }
  setTimeout(() => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].className =
        'gallery__image' + ' ' + animation[count] + ' ' + delay[i];
    }
  }, 50);

  count = count + 1 >= animation.length ? 0 : count + 1;
  console.log('count = ', count);
  console.log('animation = ', animation[count]);
});
