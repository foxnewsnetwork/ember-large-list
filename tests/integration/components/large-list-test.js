import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | large-list', function(hooks) {
  setupRenderingTest(hooks);

  const Fire = {
    name: "Fire"
  };
  const FakeLove = {
    name: "Fake Love"
  };
  const BloodSweatTears = {
    name: "Blood Sweat and Tears"
  };
  const Hits = [Fire, FakeLove, BloodSweatTears];
  hooks.beforeEach(async function() {
    this.set('models', Hits)
    await render(hbs`
      {{#large-list items=this.models startIndex=0 perPage=5 as |model|}}
        {{model.name}},
      {{else}}
        Idol,
      {{/large-list}}
    `);
  })
  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    // Template block usage:

    const actual = this.element.textContent.trim().replace(/\s+/g, "");
    assert.equal(actual, "Fire,FakeLove,BloodSweatandTears,Idol,Idol,");
  });
});
