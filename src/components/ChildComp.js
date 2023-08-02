// child component that receives data from parent component 

import React from 'react';

function ChildComp({message}) {
  return (
    <div> Hello from child component :{message}</div>
  );
} 

export default ChildComp;