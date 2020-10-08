import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <div className="main-container">
        <div className="center-container">
          <h1>{count}</h1>
          <div className="btn-container">
            <button onClick={incrementCount}>Increment</button>
            <button onClick={resetCount}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
