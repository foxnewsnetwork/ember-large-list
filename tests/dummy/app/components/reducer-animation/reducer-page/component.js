import Component from 'dummy/components/reducer-home/reducer-page/component';
import layout from './template';
import * as UTILS from 'ember-large-list/utils/fn';
import { cycle, wrap, calc } from 'dummy/utils/fn';

// BEGIN-SNIPPET components|reducer-animation|component
const makeCarouselUtils = length => Object.assign({}, UTILS, {
  add: (a, b) => wrap(a + b, length),
  skip: (it, n) => UTILS.skip(cycle(it), n),
  take: (it, n) => UTILS.take(cycle(it), n),
  get: (array, index) => UTILS.get(array, wrap(index, length))
})
// END-SNIPPET

const over = (ctx, key, fn) => {
  const val = ctx.get(key);
  ctx.set(key, fn(val));
}

export default Component.extend({
  layout,

  CarouselUtils: calc(makeCarouselUtils, 'model.length'),

  incSI(n = 1) {
    const { add } = this.get('CarouselUtils');

    over(this, '_startIndex', (index) => add(index, n))
  },

  decSI(n = 1) {
    this.incSI(-n);
  }
});
