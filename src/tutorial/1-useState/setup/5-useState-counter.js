import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increaseHandler = () => {
    setValue(value + 1);
  };
  const resetHandler = () => {
    setValue(0);
  };
  const decreaseHandler = () => {
    setValue(value - 1);
  };
  return (
    <section>
      <h1> {value} </h1>
      <button className="btn" onClick={increaseHandler}>
        increase
      </button>
      <button className="btn" onClick={resetHandler}>
        reset
      </button>
      <button className="btn" onClick={decreaseHandler}>
        decrease
      </button>
    </section>
  );
};

export default UseStateCounter;
