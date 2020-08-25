import React from 'react';

const Country = (props) => {
  //console.log(props);
  const {name,region,population,nativeName,flag,area}=props.country;

  const flagStyle={ height:'50px'};
  const countryStyle={border:'1px solid red',margin:'10px',padding:'10px'};
  const handleAddCountry=props.handleAddCountry;
 
  return (
    <div style={countryStyle}>
      <h3>This is {name}</h3>
      <img style={flagStyle} src={flag} alt=""/>
      <p>population: {population}</p>
      <p><small>Regin: {region}</small></p>
      <p>NativeName: {nativeName}</p>
      <p>Area: {area}</p>
      <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
    </div>
  );
};

export default Country;