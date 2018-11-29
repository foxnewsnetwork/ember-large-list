import Component from '../reducer-home/component';
import layout from './template';
import * as UTILS from 'ember-large-list/utils/fn';
import { wrap, calc } from 'dummy/utils/fn';

// BEGIN-SNIPPET components|reducer-animation|component
const makeCarouselUtils = length => Object.assign({}, UTILS, {
  add: (a, b) => wrap(a + b, length),
  slice(start, finish, items) {
    let output = [];
    for (let i = start; i != finish; i = wrap(i + 1, length)) {
      output.push(UTILS.get(items, i));
    }
    return output;
  },
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
