import React, { useReducer } from "react";
import classes from "./IsBasket.module.css";
import basketImage from "../../assets/basket.png";

const IsBasket = () => {
  const initialState = {
    isBasket: false,
    score: 0,
  };

  const reduceFun = (currentState, data) => {
    return {
      isBasket: data.isBasket,
      score: currentState.score + (data.isBasket ? 2 : 0),
    };
  };

  const [newState, dispatch] = useReducer(reduceFun, initialState);

  const onShoot = () => {
    dispatch({
      isBasket: Math.random() < 0.5,
      score: 2,
    });
  };

  return (
    <React.Fragment>
      <img
        className={classes["basket-image"]}
        src={basketImage}
        alt="Basket!"
      />

      <label className={classes.isBasket}>
        {newState.isBasket ? "basket!" : "miss!"}
      </label>
      <label className={classes.score}>Score: {newState.score}</label>
      <div>
        <button className={classes.button} onClick={onShoot}>
          Shoot!
        </button>
      </div>
    </React.Fragment>
  );
};

export default IsBasket;
