import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let quantity = 0;
  let totlaPrice = 0;
  let shippingCost = 0;
  for (let product of cart) {
    quantity += product.quantity;
    totlaPrice += product.price * product.quantity;
    shippingCost += product.shipping;
  }
  let tax = (totlaPrice * 0.1).toFixed(2);
  let total = totlaPrice + shippingCost + parseFloat(tax);
  return (
    <div className="cart">
      <h4>Orders Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totlaPrice}</p>
      <p>Total Shipping Charge: {shippingCost}</p>
      <p>Tax: {tax}</p>
      <h3>Grand Total: ${total.toFixed(2)}</h3>
      {props.children}
    </div>
  );
};

export default Cart;
