import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import ProductsCard from "./ProductsCard";
import { addToDb } from "../utilities/fakedb";

const Shop = () => {
  const productsData = useLoaderData();


  const handleAddToCart = (id) => {
   addToDb(id);
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
