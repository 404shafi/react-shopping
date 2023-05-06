import { useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedProducts = getShoppingCart(); // get from local storage
    // if produucts found in local storage
    if (savedProducts) {
      const newCart = [];
      for (let id in savedProducts) {
        const newProduct = products.find((product) => product.id === id);
        if (newProduct) {
          let quantity = savedProducts[id];
          newProduct.quantity = quantity;
          newCart.push(newProduct);
        }
      }
      setCart(newCart);
    }
  }, [products]);

  return [cart, setCart];
};

export default useCart;
