import React, { useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const VALID_FROM = 0;
  const VALID_TO = 13;
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
    console.log(count);
  };

  const onDecrease = () => {
    setCount(count - 1);
    console.log(count);
  };

  const showError = () => {
    return count < VALID_FROM || count > VALID_TO;
  };

  return (
    <React.Fragment>
      <p>Counter: {count}</p>

      <p hidden={!showError()} className={classes.error}>
        Valid range is 0 to 13
      </p>

      <p>
        <button onClick={onIncrease} className={classes.button}>
          Increase
        </button>
        <button onClick={onDecrease} className={classes.button}>
          Decrease
        </button>
      </p>
    </React.Fragment>
  );
};

export default Counter;
