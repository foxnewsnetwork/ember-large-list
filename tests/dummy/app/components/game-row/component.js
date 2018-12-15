import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ["list-group-item", "d-flex", "align-items-center", "justify-content-between"],
  classNameBindings: ["active"],
  willDestroyElement() {
    console.log('-- destroy game-row element, you should only see me when you do a route transition, not when you scroll!')
  }
});
