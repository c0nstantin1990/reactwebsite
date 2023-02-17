import React, { useState } from "react";

const About = () => {
  const [count, setCount] = useState(4);
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrimentCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <h1>About</h1>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrimentCount}>+</button>
    </div>
  );
};

export default About;
