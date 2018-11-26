import { computed } from '@ember/object';

export function minus(x, y) {
  return x - y;
}

export function plus(x, y) {
  return x + y;
}

export function div(n, x) {
  return Math.floor(n / x);
}

export function calc(fn, ...depKeys) {
  return computed(...depKeys, {
    get() {
      const vals = depKeys.map((key) => this.get(key));
      return fn(...vals);
    }
  }).readOnly()
}

export function compfn(fn) {
  return computed({
    get() {
      return (...args) => fn(this, ...args);
    }
  }).readOnly();
}

export function modulo(a, b) {
  return Math.abs(a % b);
}

export function eq(a, b) {
  return a === b;
}

export function between(min, max) {
  return n => Math.min(Math.max(min, n), max);
}

export function wrap(x, length) {
  return x - div(x, length) * length;
}
