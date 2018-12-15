// BEGIN-SNIPPET addon|utils|fn
export function next(it) {
  const { value, done } = it.next();
  if (done) {
    return;
  } else {
    return value;
  }
}

export function* skip(it, n = 0) {
  let i = 0;
  for (const val of it) {
    if (i < n) {
      i++;
      continue;
    } else {
      yield val;
    }
  }
}

export function* take(it, n = 6) {
  let i = 0;
  for (const val of it) {
    if (i < n) {
      i++;
      yield val;
    } else {
      break;
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
