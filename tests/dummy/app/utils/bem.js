const isPresent = x => typeof x === 'string' && x.trim().length > 0;
const isFn = f => typeof f === 'function';

/**
 * monadic right bind for maybe
 * @param {*} fn
 */
function mbind(fn) {
  return maybe => isPresent(maybe) ? fn(maybe) : null;
}

function ap(maybeFn) {
  return mbind(x => isFn(maybeFn) ? maybeFn(x) : null);
}

function compose(f, g) {
  return x => g(f(x));
}

function alt(f, g) {
  const apF = ap(f);
  const apG = ap(g);
  return mbind(x => {
    let y = apF(x);
    if (isPresent(y)) {
      return y;
    } else {
      return apG(x);
    }
  })
}

const underscore = mbind(subname => moduleName => `${moduleName}__${subname}`)

const dasherize = mbind(stateName => systemName => `${systemName}--${stateName}`)

const ID = x => x;

const defaultFn = fn => alt(fn, ID);

const joinModuleNameWithSubName = moduleName => defaultFn(ap(underscore(moduleName)))

const joinSystemNameWithStateName = stateName => defaultFn(ap(dasherize(stateName)))

function _bem(moduleName, subName, stateName) {
  return compose(
    joinModuleNameWithSubName(subName),
    joinSystemNameWithStateName(stateName)
  )(moduleName)
}

function joinStr(...maybeStrs) {
  return maybeStrs.filter(isPresent).join(' ');
}

export default function bem(moduleName, subName, stateName) {
  return _bem(moduleName, subName, stateName)
}
