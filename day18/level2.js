const cats = [
    { name: 'Whiskers', age: 3 },
    { name: 'Mittens', age: 2 },
    { name: 'Socks', age: 4 },
    { name: 'Fluffy', age: 1 }
  ];
  
  const catNames = cats.map(cat => cat.name);
  
  console.log(catNames);