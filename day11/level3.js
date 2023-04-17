const countries = {
    canada: {
      name: 'Canada',
      capital: 'Ottawa',
      population: 38008000,
      languages: ['English', 'French']
    },
    mexico: {
      name: 'Mexico',
      capital: 'Mexico City',
      population: 126190000,
      languages: ['Spanish']
    },
    australia: {
      name: 'Australia',
      capital: 'Canberra',
      population: 25780000,
      languages: ['English']
    }
  };

for (const [country, { name, capital, population, languages }] of Object.entries(countries)) {
    console.log(`${name}: Capital - ${capital}, Population - ${population}, Languages - ${languages.join(', ')}`);
  }