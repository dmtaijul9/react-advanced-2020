import React from "react";

const ErrorExample = () => {
  let title = "Random Title";

  const titleHandling = () => {
    title = "Another Title";
    console.log(title);
  };

  return (
    <>
      <h2>useState error example</h2>
      <h1> {title} </h1>
      <button className="btn" onClick={titleHandling}>
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
