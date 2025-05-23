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