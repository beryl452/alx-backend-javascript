export default function getStudentsByLocation(listStudent, city) {
  if (listStudent instanceof Array) {
    if (typeof city === 'string') {
      return listStudent.filter((student) => student.location === city);
    }
    return listStudent;
  }
  return [];
}
