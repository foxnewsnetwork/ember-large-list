import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,

  tagName: '',

  registerScrollListener(onWheel) {
    window.addEventListener('wheel', onWheel);
    return () => window.removeEventListener('wheel', onWheel);
  }
}).reopenClass({
  positionalParams: ['on-wheel']
});
