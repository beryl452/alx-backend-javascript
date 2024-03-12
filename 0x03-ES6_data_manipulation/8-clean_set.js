export default function cleanSet(set, startString) {
  if (!set || !startString) {
    return '';
  }
  if (!(set instanceof Set)) {
    throw new TypeError('set must be instance of Set');
  }
  if (typeof startString !== 'string') {
    throw new TypeError('startString must be string');
  }
  const result = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
}
