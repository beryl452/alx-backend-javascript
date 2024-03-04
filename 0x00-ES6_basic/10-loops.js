export default function appendToEachArrayValue(array, appendString) {
  const result = [];

  for (let el of array) {
    result.push(appendString + el);
  }

  return result;
}
