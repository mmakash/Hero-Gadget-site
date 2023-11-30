import React, { useContext } from "react";
import ProductsCard from "./ProductsCard";
import { addToDb } from "../utilities/fakedb";
import { CartContext, ProductContext } from "../App";

const Shop = () => {
  const productsData = useContext(ProductContext);
  const [cart,setCart] = useContext(CartContext);

  const handleAddToCart = product => {
    let newCart = []
    const exists = cart.find(
      existingProduct => existingProduct.id === product.id
    )
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest = cart.filter(
        existingProduct => existingProduct.id !== product.id
      )
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }

    setCart(newCart)
    addToDb(product.id)
  }

  return (
    <div className="products-container">
      {productsData.map((product) => (
        <ProductsCard key={product._id} product={product} handleAddToCart={handleAddToCart}></ProductsCard>
      ))}
    </div>
  );
};

export default Shop;
