import './src/scss/main.scss';

import { animationOnScroll } from './src/js/animationOnScroll';

const scrollAnimationItems = document.querySelectorAll('.animation-on-scroll--js');
const animationStartClassName = 'animation-on-scroll--before';

window.addEventListener('scroll', () =>
  animationOnScroll(scrollAnimationItems, animationStartClassName, 0),
);
window.addEventListener('load', () =>
  animationOnScroll(scrollAnimationItems, animationStartClassName, 0),
);
window.addEventListener('resize', () =>
  animationOnScroll(scrollAnimationItems, animationStartClassName, 0),
);
