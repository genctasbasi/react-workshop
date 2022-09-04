import { Fragment } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
