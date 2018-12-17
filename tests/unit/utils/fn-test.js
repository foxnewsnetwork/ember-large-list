import {
  skip,
  take,
  range,
  add,
  gt
} from 'ember-large-list/utils/fn';
import { module, test } from 'qunit';

module('Unit | Utility | fn', function () {

  module('skip', () => {
    const xs = [...'abcdefg'];
    const expected = [...'defg'];
    const actual = [...skip(xs, 3)];

    test('should be the same', (assert) => {
      assert.deepEqual(actual, expected);
    })
  })

  module('take', () => {
    const xs = [...'abcdefg'];
    const expected = [...'abcd'];
    const actual = [...take(xs, 4)];

    test('should be the same', (assert) => {
      assert.deepEqual(actual, expected)
    })
  })

  module('gt', () => {
    test('should work', (assert) => {
      assert.equal(gt(3, 1), true);
    })
  })

  module('add', () => {
    test('should work', (assert) => {
      assert.equal(add(1, 2), 3);
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
