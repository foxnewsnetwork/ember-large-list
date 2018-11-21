import {
  slice,
  range,
  add,
  gt
} from 'ember-large-list/utils/fn';
import { module, test } from 'qunit';

module('Unit | Utility | fn', function() {

  module('slice', () => {
    const xs = ['a', 'b', 'c', 'd'];
    const expected = xs.slice(0, 1);
    const actual = slice(0, 1, xs);

    test('should be the same', (assert) => {
      assert.deepEqual(actual, expected);
    })
  })

  module('gt', () => {
    test('should work', (assert) => {
      assert.equal(gt(3,1), true);
    })
  })

  module('add', () => {
    test('should work', (assert) => {
      assert.equal(add(1,2), 3);
    })
  })

  module('range', () => {
    const numbers = range(3, 30, 3);
    const numArray = [...numbers];

    test('should be an array from 3 to 30', (assert) => {
      assert.equal(numArray.length, 9);
    });
  })
});
