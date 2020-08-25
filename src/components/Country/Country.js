import React from 'react';

const Country = (props) => {
  console.log(props.name);
  return (
    <div>
      <h3>This is {props.name}</h3>
    </div>
  );
};

export default Country;