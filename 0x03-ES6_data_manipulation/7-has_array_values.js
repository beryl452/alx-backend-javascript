export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new TypeError('set must be Set');
  }
  if (!(array instanceof Array)) {
    throw new TypeError('array must be Array');
  }
  for (const element of array) {
    if (!(set.has(element))) {
      return false;
    }
  }
  return true;
}
