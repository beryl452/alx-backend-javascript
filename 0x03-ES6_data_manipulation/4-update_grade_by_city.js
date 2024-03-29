import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  if (listStudents instanceof Array && typeof city === 'string' && newGrades instanceof Array) {
    const listStudentsFiltered = getStudentsByLocation(listStudents, city);
    return listStudentsFiltered.map((st) => {
      const gradeObjects = newGrades.filter((el) => el.studentId === st.id);
      return {
        ...st,
        grade: (gradeObjects.length > 0) ? gradeObjects[0].grade : 'N/A',
      };
    });
  }
  return [];
}
