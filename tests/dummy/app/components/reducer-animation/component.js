import Component from '../reducer-home/component';
import layout from './template';
import * as UTILS from 'ember-large-list/utils/fn';
import { wrap } from 'dummy/utils/fn';

const CarouselUtils = Object.assign({}, UTILS, {
  slice(startIndex, endIndex, models) {
    let output = []
    const wrappedEndIndex = wrap(endIndex, models.length);
    let i = startIndex
    while (i !== wrappedEndIndex) {
      output.push(models[i])
      i = wrap(i + 1, models.length)
    }
    return output
  }
})

export default Component.extend({
  layout,

  CarouselUtils,

  shiftRight(m, length) {
    return (m - 1) % length;
  }
});
