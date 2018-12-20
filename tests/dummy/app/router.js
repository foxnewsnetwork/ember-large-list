import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

export const Routes = {
  Home: 'home',
  HowItWorks: 'how-it-works',
  Install: 'install',
  Animation: 'animation',
  NestedAnimation: 'nested-animation',
}

const RouteOptsMap = new Map([
  [Routes.Home, { path: '/' }]
]);

Router.map(function () {
  for (const key in Routes) {
    const route = Routes[key]
    this.route(route, RouteOptsMap.get(route))
  }
});

export default Router;
