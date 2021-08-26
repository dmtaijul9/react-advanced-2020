import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Text");
  const textHandler = () => {
    console.log(text);
    if (text === "Random Text") {
      setText("Text has been changed");
    } else {
      setText("Random Text");
    }
  };
  return (
    <div>
      <h2>useState basic example</h2>
      <h2> {text} </h2>
      <button className="btn" onClick={textHandler}>
        Change Title
      </button>
    </div>
  );
};

export default UseStateBasics;
