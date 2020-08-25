import React from 'react';

const Country = (props) => {
  console.log(props.country.name);
  const {name,region,population,nativeName,flag,area}=props.country;
  return (
    <div>
      <h3>This is {name}</h3>
      <img style={{height:'50px'}} src={flag} alt=""/>
      <p>population: {population}</p>
      <p><small>Regin: {region}</small></p>
      <p>NativeName: {nativeName}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;