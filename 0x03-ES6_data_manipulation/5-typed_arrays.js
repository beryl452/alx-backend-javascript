export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number') {
    throw new TypeError('length must be number');
  }
  if (typeof position !== 'number') {
    throw new TypeError('position must be a number');
  }
  if (typeof value !== 'number') {
    throw new TypeError('value must be a number');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  try {
    view.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }
  return view;
}
