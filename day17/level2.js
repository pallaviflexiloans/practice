let student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    skills: ['JavaScript', 'HTML', 'CSS'],
    country: 'United States',
    enrolled: {
      math: true,
      science: true,
      english: false
    }
  };
  localStorage.setItem('student', JSON.stringify(student));
  let studentString = localStorage.getItem('student');
let studentObject = JSON.parse(studentString);
console.log(studentObject);
  