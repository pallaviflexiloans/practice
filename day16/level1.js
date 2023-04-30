var skills = ["JavaScript", "HTML", "CSS"];

var skillsJson = JSON.stringify(skills);

console.log(skillsJson);//question1

let age = 42
let age_str = age.toString()
console.log(age_str) //question2

let isMarried = true;
let isMarriedStr = isMarried.toString();
console.log(isMarriedStr);//question3

let student = {
    name: "Pallavi",
    age: 35,
    isEnrolled: true,
    courses: ["Math", "Science", "English"]
  };
  
  let studentStr = JSON.stringify(student);
  console.log(studentStr); //question4