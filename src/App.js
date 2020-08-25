import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [countries,setCountries]=useState([]);
  const [cart,setCart]=useState([]);


  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=> setCountries(data))
    .catch(error=>console.log(error))
  },[])
  const handleAddCountry=(country)=> {
    const newCart = [...cart,country];
    setCart(newCart);
    
  };
  return (
    
    <div className="App">
      <h2>Country Loaded: {countries.length}</h2>
     <p>Country Added:{cart.length}</p>
     <Cart cart={cart}></Cart>
      
        {
          countries.map(country=> <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
        }
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;
