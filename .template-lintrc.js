'use strict';

module.exports = {
  extends: 'recommended',
  ignore: [
    './node_modules/**',
    './vendor/**',
    './tests/dummy/**' // this does not work
  ],
  rules: {
    'attribute-indentation': false
  }
};
