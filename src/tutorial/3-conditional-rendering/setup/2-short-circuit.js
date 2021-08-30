import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <React.Fragment>
      <h2>short circuit</h2>
      {/* <h3> FirstValue: {firstValue} </h3>
      <h3> secondValue: {secondValue} </h3> */}
      <h3> {text || "Tanmoy Hassan"} </h3>
      {/*       {text && <h2>Hello World</h2>}  // This is not rendering 
      {!text && <h2>Hello World</h2>} // This is rendering */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Button
      </button>
      {isError && <h3>I am showing</h3>}
      {isError ? (
        <p>There is an Error</p>
      ) : (
        <div>
          <h2>There is no Error </h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShortCircuit;
