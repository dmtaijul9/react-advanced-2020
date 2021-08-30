import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState();

  const getUser = () => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }
        throw new Error("Somethin is wrong");
      })
      .then((user) => {
        setUser(user);
        setIsLoading(false);
        console.log(user);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else if (isError) {
    return (
      <div>
        <h2>Something is wrong</h2>
      </div>
    );
  }
  return (
    <React.Fragment>
      <h2> {user.login} </h2>
    </React.Fragment>
  );
};

export default MultipleReturns;
