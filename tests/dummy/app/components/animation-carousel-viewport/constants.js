import EmberObject from '@ember/object';

export const DIRECTION = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  NONE: 'NONE'
};

export const AnimeState = EmberObject.extend({
  cancel() {
    this.set('start', () => { })
    this.set('finish', () => { })
  },

  willDestroy() {
    this.cancel();
  }
});

export const BEM_NAME = "animation-carousel-viewport";
