export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Béryl",
  lastName: "HOUESSOU",
  age: 20,
  location: "Seoul, South Korea",
};
const student2: Student = {
  firstName: "Béryl 001",
  lastName: "HOUESOU",
  age: 22,
  location: "Ouidah, Bénin",
};

const studentsList: Student[] = [
  student1,
  student2,
];
const styleSheet = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
  table {
    border-collapse: collapse;
    width: 35%;
    height: 30%;
  }
  thead {
    font-weight: bold;
    background: gainsboro;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Displays a table of students' information on the webpage.
 * @param students - An array of Student objects containing the students' information.
 */
export const displayTable = (students: Student[]): void => {
  const table = document.createElement('table');

  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  const headRow = document.createElement('tr');
  const headCell1 = document.createElement('td');
  const headCell2 = document.createElement('td');

  headCell1.textContent = 'Firstname';
  headCell2.textContent = 'Location';

  headRow.appendChild(headCell1);
  headRow.appendChild(headCell2);
  tableHead.appendChild(headRow);
  table.appendChild(tableHead);

  students.forEach(student => {
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;

    row.appendChild(cell1);
    row.appendChild(cell2);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

displayTable(studentsList);
const style = document.createElement('style');
style.textContent = styleSheet;
document.head.appendChild(style);
document.title = 'Task 0';

