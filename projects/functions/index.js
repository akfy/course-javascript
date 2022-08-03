function returnFirstArgument(value) {
  return value;
}

function sumWithDefaults(a, b = 100) {
  return a + b;
}

function returnFnResult(fn) {
  return fn();
}

function returnCounter(number = 0) {
  return () => (number += 1);
}

function returnArgumentsArray() {
  return [].slice.call(arguments);
}

function bindFunction(fn, ...args) {
  return () => fn(...args);
}

export {
  returnFirstArgument,
  sumWithDefaults,
  returnArgumentsArray,
  returnFnResult,
  returnCounter,
  bindFunction,
};
