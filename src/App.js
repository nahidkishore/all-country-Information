import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

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
      <ul>
        {
          countries.map(country=><li>{country.name}</li>)
        }
      </ul>
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
