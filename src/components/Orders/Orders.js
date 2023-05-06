import React from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { removeFromDb } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const deleteProduct = (id) => {
    console.log(id);
    const rest = cart.filter((product) => product.id !== id);
    setCart(rest);
    removeFromDb(id);
  };
  return (
    <div className="orders-container">
      <div>
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/inventory">
            <button>Proceeed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
