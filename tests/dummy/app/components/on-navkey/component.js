import Component from '@ember/component';
import { tryInvoke } from '@ember/utils';
import layout from './template';

export default Component.extend({
  layout,
  tagName: '',
  registerHandler(handlers) {
    const handler = event => {
      tryInvoke(handlers, `${event.which}`, [event])
    }
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
    }
  }
});
