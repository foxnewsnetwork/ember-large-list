import { isArray } from '@ember/array';
import { isBlank } from '@ember/utils';

// BEGIN-SNIPPET addon|utils|fn
export { get } from '@ember/object';

export function skip(it, n = 0) {
  for (let i = 0; i < n; i++) {
    it.next();
  }
  return it;
}

export function* take(it, n = 6) {
  for (let i = 0; i < n; i++) {
    yield it.next();
  }
}

export function slice(start, finish, xs) {
  if (isArray(xs)) {
    return xs.slice(start, finish);
  } else if (isBlank(xs)) {
    return [];
  } else if (typeof xs[Symbol.iterator] === 'function') {
    return take(skip(xs, start), finish - start);
  }
}

export function* range(start = 0, end = 5, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

export function add(a, b) { return a + b; }

export function gt(a, b) { return a > b; }
// END-SNIPPET
