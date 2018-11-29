import Component from '@ember/component';
import layout from './template';
import bem from 'dummy/utils/bem';
import { calc } from 'dummy/utils/fn';
import { BEM_NAME, DIRECTION } from '../constants';

const CONTAINER_NAME = bem(BEM_NAME, 'row');

const ANIME_LEFT_CLASS = bem(BEM_NAME, 'row', 'anime-left');
const ANIME_RIGHT_CLASS = bem(BEM_NAME, 'row', 'anime-right');

const PROPS = {
  onTransitionEnd: 'onTransitionEnd',
  animeDirection: 'animeDirection',
  isAnimating: 'isAnimating'
};

export default Component.extend({
  layout,

  classNames: [CONTAINER_NAME],

  classNameBindings: [
    `isAnimeLeft:${ANIME_LEFT_CLASS}:`,
    `isAnimeRight:${ANIME_RIGHT_CLASS}:`
  ],

  registerDOMEventHandler(element, eventName, handler) {
    element.addEventListener(eventName, handler);
    return () => element.removeEventListener(eventName, handler);
  },

  isAnimeLeft: calc(
    (isAnimating, direction) => isAnimating && direction === DIRECTION.LEFT,
    PROPS.isAnimating,
    PROPS.animeDirection
  ),

  isAnimeRight: calc(
    (isAnimating, direction) => isAnimating && direction === DIRECTION.RIGHT,
    PROPS.isAnimating,
    PROPS.animeDirection
  ),
}).reopenClass({
  positionalParams: [PROPS.onTransitionEnd]
});
