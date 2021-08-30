import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </React.Fragment>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });

    return window.removeEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, []);
  return (
    <React.Fragment>
      <div style={{ marginTop: "50px" }}>
        <h2>Window</h2>
        <h3>Size: {size} px</h3>
      </div>
    </React.Fragment>
  );
};

export default ShowHide;
