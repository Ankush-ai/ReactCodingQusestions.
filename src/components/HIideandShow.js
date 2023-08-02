// The Task is to implement a functionality in react js that "Hello"[Name] with a button to toggle between showing and hiding name

import React, { useState } from 'react';

const Greeting = () => {
  const [showName, setShowName] = useState(true);

  const toggleNameVisibility = () => {
    setShowName((prevShowName) => !prevShowName);
  };

  return (
    <div>
      <p>Hello {showName ? '[Name]' : ''}</p>
      <button onClick={toggleNameVisibility}>
        {showName ? 'Hide Name' : 'Show Name'}
      </button>
    </div>
  );
};

export default Greeting;

