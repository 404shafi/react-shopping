import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, img, price, shipping, quantity, id } = props.product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <h3>{name.length > 15 ? name.slice(0, 15) + "..." : name}</h3>
        <p>${price}</p>
        <p>Shipping: {shipping}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div>
        <button onClick={() => props.deleteProduct(id)}>Delete</button>
      </div>
    </div>
  );
};

export default ReviewItem;
