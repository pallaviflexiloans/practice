const users = [
    { name: 'Avyaan', skills: ['JavaScript', 'HTML', 'CSS'] },
    { name: 'Pallavi', skills: ['Python', 'SQL', 'Bash'] },
    { name: 'Abhishek', skills: ['JavaScript', 'Python', 'Java'] },
    { name: 'Niranjani', skills: ['Python', 'R', 'SQL'] },
  ];
  
  let mostSkilledUser = '';
  let maxSkills = 0;
  
  for (let i = 0; i < users.length; i++) {
    const numSkills = users[i].skills.length;
    if (numSkills > maxSkills) {
      mostSkilledUser = users[i].name;
      maxSkills = numSkills;
    }
  }
  
  console.log(`The person with the most skills is ${mostSkilledUser}.`); //question1


  const users1 = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
let loggedInUsersCount = 0;
let usersWith50OrMorePointsCount = 0;

for (const key in users1) {
  if (users1[key].isLoggedIn) {
    loggedInUsersCount++;
  }
  if (users1[key].points >= 50) {
    usersWith50OrMorePointsCount++;
  }
}

console.log(`Logged in users: ${loggedInUsersCount}`);
console.log(`Users with 50 or more points: ${usersWith50OrMorePointsCount}`); //question2

let usrs = Object.keys(users1);
usrs.forEach((usr) => {
    if (users1[usr].isLoggedIn) {
        loggedInUsersCount++;
      }
      if (users1[usr].points >= 50) {
        usersWith50OrMorePointsCount++;
      }
});


console.log(`Logged in users: ${loggedInUsersCount}`);
console.log(`Users with 50 or more points: ${usersWith50OrMorePointsCount}`); //question2

users1['pallavi'] = 
    {
        email: 'pallavi.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 30,
        isLoggedIn: false,
        points: 30
    };

//console.log(users1);

   



  
  
  
  
  
  
  