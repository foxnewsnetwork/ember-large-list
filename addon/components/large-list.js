import Component from '@ember/component';
import layout from '../templates/components/large-list';
import UTILS from '../utils/fn';

export default Component.extend({
  layout,
  tagName: '',
  UTILS,
  startIndex: 0,
  perPage: 5,
  items: []
});
