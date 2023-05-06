import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const addToCart = (clickedProduct) => {
    let addedProduct = cart.find((product) => product.id === clickedProduct.id);
    let restProducts = cart.filter(
      (product) => product.id !== clickedProduct.id
    );
    if (!addedProduct) {
      clickedProduct.quantity = 1;
    } else {
      let newQuantity = clickedProduct.quantity + 1;
      clickedProduct.quantity = newQuantity;
    }
    const newCart = [...restProducts, clickedProduct];
    setCart(newCart);
    addToDb(clickedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button>Review Orders</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
