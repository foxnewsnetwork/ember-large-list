import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from './template';
import bem from 'dummy/utils/bem';
import { calc, compfn } from 'dummy/utils/fn';
import { BEM_NAME, DIRECTION } from './constants';

const CONTAINER_NAME = bem(BEM_NAME, 'container');

const STATE = {
  isAnimating: 'isAnimating'
};

const PROPS = {
  animatedValue: 'animatedValue',
  CarouselUtils: 'CarouselUtils'
}

export default Component.extend({
  BEM_NAME,
  layout,
  classNames: [CONTAINER_NAME],

  animeDirection: calc(
    ({ add }, nextVal, prevVal) => {
      if (nextVal === add(prevVal, 1)) {
        return DIRECTION.LEFT
      }
      if (add(nextVal, 1) === prevVal) {
        return DIRECTION.RIGHT
      }
      return DIRECTION.NONE
    },
    PROPS.CarouselUtils,
    PROPS.animatedValue,
    'delayedAnimatedValue'
  ),

  delayedAnimatedValue: computed({
    get() {
      return this.get(PROPS.animatedValue)
    }
  }).readOnly(),

  animeAFF: compfn(self => {
    const start = () => {
      self.set(STATE.isAnimating, true)
    }

    const finish = () => {
      self.notifyPropertyChange('delayedAnimatedValue');
      self.set(STATE.isAnimating, false);
    }

    return { start, finish }
  }),

  notEq: (a, b) => a !== b,
}).reopenClass({
  positionalParams: [PROPS.animatedValue]
});
