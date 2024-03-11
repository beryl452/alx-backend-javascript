export default function getStudentIdsSum(listStudent) {
  if (listStudent instanceof Array) {
    return listStudent.reduce((acc, student) => acc + student.id, 0);
  }
  return [];
}
