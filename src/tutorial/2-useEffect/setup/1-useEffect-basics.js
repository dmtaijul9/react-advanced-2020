import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(50);
  }, []);
  return (
    <>
      <h1> {value} </h1>
      <button className="btn" onClick={() => setValue(value + 5)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
