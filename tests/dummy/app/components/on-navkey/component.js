import Component from '@ember/component';
import { tryInvoke } from '@ember/utils';
import layout from './template';

const KEY_MAP = {
  "40": 'on-down',
  "38": 'on-up',
  "37": 'on-left',
  "39": 'on-right',
}

export default Component.extend({
  layout,
  tagName: '',
  registerHandler(handler) {
    document.addEventListener('keyup', handler)
    return () => document.removeEventListener('keyup', handler)
  },

  keyHandler(event) {
    const methodName = KEY_MAP[event.which] || 'NOOP';
    tryInvoke(this, methodName, [event])
  },

  NOOP: () => {},
});
