import Component from '@ember/component';
import layout from './template';
import * as UTILS from 'dummy/utils/fn';

const isDown = event => event.deltaY > 0;

export default Component.extend({
  UTILS,
  layout,
  tagName: '',
  _startIndex: 0,
  perPage: 6,

  startIndex: UTILS.calc(UTILS.modulo, '_startIndex', 'model.length'),

  totalPages: UTILS.calc(UTILS.div, 'model.length', 'perPage'),

  remainingLength: UTILS.calc(UTILS.minus, 'model.length', 'startIndex'),

  currentPage: UTILS.calc(UTILS.div, 'startIndex', 'perPage'),

  onMouseWheel(mouseWheelEvent) {
    if (isDown(mouseWheelEvent)) {
      this.incSI()
    } else {
      this.decSI()
    }
  },

  incSI(n=1) {
    this.incrementProperty('_startIndex', n)
  },

  decSI(n=1) {
    this.incrementProperty('_startIndex', this.get('model.length') - n)
  }
});
