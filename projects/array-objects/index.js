function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

function map(array, fn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i], i, array));
  }
  return result;
}

function reduce(array, fn, initial) {
  let i = 0;
  if (!initial) {
    initial = array[0];
    i = 1;
  }
  for (i; i < array.length; i++) {
    initial = fn(initial, array[i], i, array);
  }
  return initial;
}

function upperProps(obj) {
  const result = [];
  for (const prop in obj) {
    result.push(prop.toUpperCase());
  }
  return result;
}

function createProxy(obj) {
  return new Proxy(obj, {
    set(target, prop, val) {
      target[prop] = val * val;
      return true;
    },
  });
}

export { forEach, map, reduce, upperProps, createProxy };
