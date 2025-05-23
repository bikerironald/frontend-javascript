interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Example usage:
const teacher1: Teacher = {
  firstName: "Erick",
  lastName: "Bikeri",
  fullTimeEmployee: true,
  location: "Nairobi",
  contract: false
};

console.log(teacher1);

interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'Alex',
  lastName: 'Otara',
  location: 'Kimbo',
  fullTimeEmployee: true,
  numberOfReports: 20,
};

console.log(director1)



interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("Bikeri", "Ronald")); 

