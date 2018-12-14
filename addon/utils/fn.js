import { isArray } from '@ember/array';
import { isBlank } from '@ember/utils';

// BEGIN-SNIPPET addon|utils|fn
export function get(it, _index) {
  const { value, done } = it.next();
  if (done) {
    return;
  } else {
    return value;
  }
}

export function skipTake(start, amount, xs) {
  if (isArray(xs)) {
    return xs.slice(start, start + amount)[Symbol.iterator]();
  } else if (typeof xs[Symbol.iterator] === 'function') {
    return take(skip(xs, start), amount);
  } else {
    return [][Symbol.iterator]();
  }
}

export function skip(it, n = 0) {
  for (let i = 0; i < n; i++) {
    it.next();
  }
  return it;
}

export function* take(it, n = 6) {
  for (let i = 0; i < n; i++) {
    const { value, done } = it.next();
    if (done) {
      break;
    } else {
      yield value;
    }
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
