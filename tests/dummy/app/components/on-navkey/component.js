import Component from '@ember/component';
import { tryInvoke } from '@ember/utils';
import { on } from '@ember/object/evented';
import layout from './template';
import { EKMixin, EKOnInsertMixin, keyPress } from 'ember-keyboard';

const NAMES = {
  ArrowDown: 'on-down',
  ArrowUp: 'on-up',
  ArrowLeft: 'on-left',
  ArrowRight: 'on-right'
};

const x = key => on(keyPress(key), function() { tryInvoke(this, NAMES[key], []) });
export default Component.extend(EKMixin, EKOnInsertMixin, {
  layout,
  tagName: '',
  onDown: x('ArrowDown'),
  onUp: x('ArrowUp'),
  onLeft: x('ArrowLeft'),
  onRight: x('ArrowRight')
});
