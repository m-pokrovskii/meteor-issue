import React, { useState } from 'react';
import '/imports/ui/Hello.css';
export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
