import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Tanmoy",
    age: 22,
    message: "Shahrin is my gf",
  });

  const messageHandler = () => {
    setPerson({
      ...person,
      message: "I am changed",
    });
  };

  return (
    <>
      {" "}
      <h1>{person.name}</h1> <h1>{person.age}</h1>
      <h1>{person.message}</h1>
      <button className="btn" onClick={messageHandler}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
