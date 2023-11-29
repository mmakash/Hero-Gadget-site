import React from "react";
import { useLoaderData } from "react-router";

const Cart = () => {
    // products,initialCart
  const myCart = useLoaderData();
  const cartArr = myCart.initialCart;
  console.log(cartArr);
  return (
    <div>
      <h1>This is cart {cartArr.length}</h1>
    </div>
  );
};

export default Cart;
