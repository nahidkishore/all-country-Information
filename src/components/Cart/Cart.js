import React from 'react';

const Cart = (props) => {
  const cart=props.cart;
  //console.log(cart);
    
  /* let totalPopulation=0;
  for (let i = 0; i < cart.length; i++) {
    const country = cart[i];
    totalPopulation=totalPopulation+country.population; */
   const totalPopulation=cart.reduce((sum, country) => sum+country.population,0)
  return (
    <div>
      <h5> this is cart: {cart.length} </h5>
      <h6>TotalPopulation: {totalPopulation}</h6>
    </div>
  );
};

export default Cart;