import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  willDestroyElement() {
    this.action();
  }
}).reopenClass({
  positionalParams: ['action']
});
