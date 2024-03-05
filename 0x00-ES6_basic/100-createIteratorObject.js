export default function iterateThroughObject(reportWithIterator) {
  const result = [];

  for (const department of Object.keys(reportWithIterator.allEmployees)) {
    result.push(...reportWithIterator.allEmployees[department]);
  }
  return result;
}
