interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


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



interface StudentClass {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Bikeri", "Ronald");
console.log(student.displayName()); 
console.log(student.workOnHomework()); 

