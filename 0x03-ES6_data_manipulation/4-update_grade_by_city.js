import getStudentsByLocation from './2-get_students_by_loc'

export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  if (listStudents instanceof Array && typeof city === 'string' &&  newGrades instanceof Array) {
    const listStudentsFiltered = listStudents.filter((st) => st.location === city)
    return listStudentsFiltered.map((st) => ({
      return ({
        grade: newGrades.filter((el) => el.id === st.id)[0].grade,
      });
   }));
 }
  return [];
}
