import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['card', 'game-card__container', 'mb-3'],
  classNameBindings: ['is-active:text-white:', 'is-active:bg-primary:']
});
