import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, img, seller, ratings, id } = props.product;
  const addToCart = props.addToCart;
  const star = "*".repeat(Number(ratings));
  return (
    <div className="product">
      <img src={img} alt="img" />
      <h4 title={name}>
        {name.length > 15 ? name.slice(0, 15) + "....." : name}
      </h4>
      <p>Price: ${price}</p>
      <p>Manufacturer: {seller}</p>
      <p className="rating">
        <span>Rating: </span> <span style={{ fontSize: "30px" }}> {star}</span>{" "}
        <span> ({ratings})</span>
      </p>
      <button className="addCart" onClick={() => addToCart(props.product)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
