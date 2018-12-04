import EmberObject from '@ember/object';

export const DIRECTION = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  NONE: 'NONE'
};

export const AnimeState = EmberObject.extend({
  onFinish() {
    const finish = this.get('finish');
    finish();
    this.set('finish', () => { })
  },

  cancel() {
    this.set('start', () => { })
    this.set('finish', () => { })
  },

  willDestroy() {
    this.onFinish();
    this.cancel();
  }
});

export const BEM_NAME = "animation-carousel-viewport";
