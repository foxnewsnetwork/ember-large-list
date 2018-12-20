import Component from '@ember/component';
import layout from './template';
import { getGames } from 'dummy/endpoints/mixer';

export default Component.extend({
  layout,
  tagName: '',
  getGames
});
