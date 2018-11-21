import Route from '@ember/routing/route';
import { getGames } from 'dummy/endpoints/mixer';

export default Route.extend({
  async model() {
    return getGames();
  }
});
