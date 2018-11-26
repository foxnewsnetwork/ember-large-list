// BEGIN-SNIPPET addon|components|large-list
import Component from '@ember/component';
import layout from '../templates/components/large-list';
import UTILS from '../utils/fn';

export default Component.extend({
  UTILS,
  layout,
  tagName: '',
  startIndex: 0,
  perPage: 5
});
// END-SNIPPET
