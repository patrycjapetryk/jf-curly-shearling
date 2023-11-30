import './src/scss/main.scss';

import * as PIXI from 'pixi.js';

import { animationOnScroll } from './src/js/animationOnScroll';

import titleImage from './src/assets/images/title-1.png';
import displacementMap from './src/assets/images/displacement-map.jpeg';

const scrollAnimationItems = document.querySelectorAll('.animation-on-scroll--js');
const animationStartClassName = 'animation-on-scroll--before';
const title = document.querySelector('.header__title--js');

const app = new PIXI.Application({
  width: 1085,
  height: 85,
  backgroundAlpha: 0,
});

title.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

const flag = PIXI.Sprite.from(titleImage);
container.addChild(flag);
flag.width = app.screen.width - 20;
flag.height = app.screen.height - 20;
flag.x = 10;
flag.y = 10;

const displacementSprite = PIXI.Sprite.from(displacementMap);

displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
const displacementFilter = new PIXI.DisplacementFilter(displacementSprite);
displacementFilter.padding = 10;

displacementSprite.position = flag.position;

app.stage.addChild(displacementSprite);

flag.filters = [displacementFilter];

displacementFilter.scale.x = 50;
displacementFilter.scale.y = 70;

app.ticker.add(() => {
  displacementSprite.x++;

  if (displacementSprite.x > displacementSprite.width) {
    displacementSprite.x = 0;
  }
});

window.addEventListener('scroll', () =>
  animationOnScroll(scrollAnimationItems, animationStartClassName, 0),
);
window.addEventListener('load', () =>
  animationOnScroll(scrollAnimationItems, animationStartClassName, 0),
);
window.addEventListener('resize', () =>
  animationOnScroll(scrollAnimationItems, animationStartClassName, 0),
);
