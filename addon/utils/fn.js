// BEGIN-SNIPPET addon|utils|fn
export { get } from '@ember/object';

export function slice(start, finish, xs) {
  return (xs || []).slice(start, finish);
}

export function* range(start = 0, end = 5, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

export function add(a, b) { return a + b; }

export function gt(a, b) { return a > b; }
// END-SNIPPET
