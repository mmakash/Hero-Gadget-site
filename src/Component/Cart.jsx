/* eslint-disable no-const-assign */
/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../utilities/fakedb";
import { CartContext } from "../App";

const Cart = () => {
  const [cart,setCart] = useContext(CartContext);
  // const myCart = useLoaderData();
  // const cart = myCart.initialCart;
  let total = 0;
 for(const product of cart){
  total = total + product.price * product.quantity
 }

 const handleRemoveItem = (id) => {
   const remaining = cart.filter(product => product.id !== id);
   setCart(remaining);
   removeFromDb(id);
 }

 const handleCheckout = () => {
  if(cart.length > 0){
    setCart([]);
    deleteShoppingCart();
  }
 }

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {cart.length ? "Your Cart" : "Your Cart is Empty"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
           <CartItem key={product._id} product={product} handleRemoveItem={handleRemoveItem}></CartItem>
          ))}
        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total amount: <span className='font-semibold'>{total}$</span>
          </p>
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {
            cart.length > 0 ? (
              <button onClick={handleCheckout} className="btn-outlined">Checkout</button>
            ) : (
              <Link to="/shop"><button className="btn-outlined">Go to Shopping</button></Link>
            )
          }
          <button className="btn-primary">Continue Shopping</button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
