import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';


function App() {
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=> setCountries(data))
    .catch(error=>console.log(error))
  },[])
  return (
    
    <div className="App">
      <p>Country Loaded: {countries.length}</p>
      
        {
          countries.map(country=> <Country country={country} key={country.alpha3Code}></Country>)
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
