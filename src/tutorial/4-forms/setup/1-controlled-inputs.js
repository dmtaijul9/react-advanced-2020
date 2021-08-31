import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [peoples, setPeoples] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!firstName && !email) {
      console.log("Please input all the feild");
    }
    const newParson = {
      firstName: firstName,
      email: email,
      id: new Date().getTime().toString(),
    };
    console.log(newParson);
    setPeoples((peoples) => {
      return [...peoples, newParson];
    });
  };

  return (
    <React.Fragment>
      <article>
        <form action="get" className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="firstName">First Name : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {peoples &&
          peoples.map((person) => {
            return (
              <div className="item" key={person.id}>
                <h2> {person.firstName} </h2>
                <h4> {person.email} </h4>
              </div>
            );
          })}
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
