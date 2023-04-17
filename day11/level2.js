const users = [
    {name: 'John Doe', age: 30, email: 'johndoe@example.com'},
    {name: 'Jane Smith', age: 25, email: 'janesmith@example.com'},
    {name: 'Bob Johnson', age: 40, email: 'bobjohnson@example.com'}
  ];
  
  for (const {name, age, email} of users) {
    console.log(Object.keys({name, age, email}));
  }  //question1

  const people = [  { name: 'Alice', skills: ['JavaScript', 'HTML'] },
  { name: 'Bob', skills: ['Python'] },
  { name: 'Charlie', skills: ['Java', 'C++', 'PHP'] },
  { name: 'Dave', skills: ['JavaScript'] }
];

const lessThanTwoSkills = people.filter(person => person.skills.length > 2);

console.log(lessThanTwoSkills); //question2