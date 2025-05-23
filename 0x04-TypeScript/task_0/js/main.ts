interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Eric",
  lastName: "Bikeri",
  age: 21,
  location: "Kimbo"
};

const student2: Student = {
  firstName: "Alex",
  lastName: "Otara",
  age: 22,
  location: "Gwa Kairu"
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// Add rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);