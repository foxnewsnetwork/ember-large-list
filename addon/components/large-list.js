// BEGIN-SNIPPET addon|components|large-list
import Component from '@ember/component';
import layout from '../templates/components/large-list';
import UTILS from '../utils/fn';
import { alias } from '@ember/object/computed';

export default Component.extend({
  UTILS,
  layout,
  tagName: '',
  startIndex: 0,
  perPage: 5,
  offset: alias('startIndex'),
  perPage: alias('limit')
});
// END-SNIPPET
