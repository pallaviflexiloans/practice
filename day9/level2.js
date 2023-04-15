const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
    { name: 'Product 4', price: 40 },
    { name: 'Product 5', price: 50 }
  ];
  
  const totalPriceMoreThan20 = products
    .map(product => product.price) // Extract prices
    .filter(price => price > 20) // Keep prices above 20
    .reduce((total, price) => total + price, 0); // Add up prices
  
  console.log(totalPriceMoreThan20); //total price of products price more than 20

  //question1

  const totalPrice = products
  .map(product => product.price)
  .reduce((arr,curr) => arr+curr,0);
  console.log(totalPrice); //question2

  