export default function getListStudentIds(listStudent) {
  if (listStudent instanceof Array) {
    return listStudent.map((student) => student.id);
  }
  return [];
}
