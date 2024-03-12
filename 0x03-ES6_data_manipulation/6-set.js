export default function setFromArray(array) {
  if (!(array instanceof Array)) {
    throw new TypeError('array must be Array');
  }
  return new Set(array);
}
