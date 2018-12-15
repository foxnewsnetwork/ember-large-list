import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | large-list', function (hooks) {
  setupRenderingTest(hooks);

  const Fire = {
    name: "Fire"
  };
  const FakeLove = {
    name: "FakeLove"
  };
  const BloodSweatTears = {
    name: "BloodSweatandTears"
  };
  const Idol = {
    name: "Idol"
  };
  const DNA = {
    name: "DNA"
  };
  const MicDrop = {
    name: "MICDrop"
  };
  const Hits = [Fire, FakeLove, BloodSweatTears, Idol, DNA, MicDrop];
  hooks.beforeEach(async function () {
    this.set('models', Hits)
    this.set('startIndex', 1)
    this.set('perPage', 3)
    await render(hbs`
      {{#large-list
        items=this.models
        startIndex=this.startIndex
        perPage=this.perPage
      as |model gIndex lIndex|
      }}
        {{model.name}}-{{gIndex}}-{{lIndex}},
      {{/large-list}}
    `);
  })
  const EXPECTED_RESULT = [
    `${FakeLove.name}-1-0`,
    `${BloodSweatTears.name}-2-1`,
    `${Idol.name}-3-2`
  ].join(',') + ",";
  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    // Template block usage:

    const actual = this.element.textContent.trim().replace(/\s+/g, "");
    assert.equal(actual, EXPECTED_RESULT);
  });

  module("Changing startIndex", (hooks) => {
    hooks.beforeEach(function () {
      this.set('startIndex', 0)
    })

    const EXPECTED_RESULT = [
      `${Fire.name}-0-0`,
      `${FakeLove.name}-1-1`,
      `${BloodSweatTears.name}-2-2`,
    ].join(',') + ",";
    test('it should have moved the rendered contents "back"', function (assert) {
      const actual = this.element.textContent.trim().replace(/\s+/g, "");
      assert.equal(actual, EXPECTED_RESULT);
    })
  })

  module("Changing perPage", (hooks) => {
    hooks.beforeEach(function () {
      this.set('perPage', 4)
    })

    const EXPECTED_RESULT = [
      `${FakeLove.name}-1-0`,
      `${BloodSweatTears.name}-2-1`,
      `${Idol.name}-3-2`,
      `${DNA.name}-4-3`
    ].join(',') + ",";
    test('it should render more of the contents', function (assert) {
      const actual = this.element.textContent.trim().replace(/\s+/g, "");
      assert.equal(actual, EXPECTED_RESULT);
    })
  })
});
