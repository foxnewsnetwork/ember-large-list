import Component from '@ember/component';
import layout from './template';
import { calc } from 'dummy/utils/fn';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,
  tagName: '',
  router: service('router'),
  reducerComponentName: calc(
    (routeName) => `reducer-${routeName.replace(".", "/")}`,
    'router.currentRouteName'
  )
});
