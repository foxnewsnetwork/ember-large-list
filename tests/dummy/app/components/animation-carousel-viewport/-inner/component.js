import Component from '@ember/component';
import layout from './template';
import bem from 'dummy/utils/bem';
import { and } from '@ember/object/computed';
import { BEM_NAME } from '../constants';

const CONTAINER_NAME = bem(BEM_NAME, 'inner');

const ANIME_PREV_CLASS = bem(BEM_NAME, 'inner', 'anime-prev');
const ANIME_NEXT_CLASS = bem(BEM_NAME, 'inner', 'anime-next');

const PROPS = {
  onTransitionEnd: 'onTransitionEnd',
  animeDirection: 'animeDirection',
  isAnimating: 'isAnimating'
};

const EVENT_NAME = "transitionend";

export default Component.extend({
  layout,

  classNames: [CONTAINER_NAME],

  classNameBindings: [
    `isAnimePrev:${ANIME_PREV_CLASS}:`,
    `isAnimeNext:${ANIME_NEXT_CLASS}:`
  ],

  registerDOMEventHandler(element, handler) {
    element.addEventListener(EVENT_NAME, handler);
    return () => element.removeEventListener(EVENT_NAME, handler);
  },

  isAnimePrev: and(
    PROPS.isAnimating,
    `${PROPS.animeDirection}.isPrev`
  ),

  isAnimeNext: and(
    PROPS.isAnimating,
    `${PROPS.animeDirection}.isNext`
  ),
}).reopenClass({
  positionalParams: [PROPS.onTransitionEnd]
});
