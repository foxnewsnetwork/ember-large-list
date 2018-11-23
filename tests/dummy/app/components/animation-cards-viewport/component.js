import Component from '@ember/component';
import layout from './template';
import bem from 'dummy/utils/bem';

const BEM_NAME = "animation-cards-viewport";

const CONTAINER_NAME = bem(BEM_NAME, 'container');

const myBEM = (...xs) => bem(BEM_NAME, ...xs);

const ANIME_LEFT_CLASS = myBEM('container', 'anime-left');
const ANIME_RIGHT_CLASS = myBEM('container', 'anime-right');

export default Component.extend({
  BEM_NAME,
  layout,
  bem: myBEM,
  classNames: [CONTAINER_NAME],
  classNameBindings: [`is-anime-left:${ANIME_LEFT_CLASS}:`, `is-anime-right:${ANIME_RIGHT_CLASS}:`]
});
