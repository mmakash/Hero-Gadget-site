/* eslint-disable no-unused-vars */
import Header from "./Component/Header";
import { Outlet, useLoaderData } from "react-router";
import Footer from "./Component/Footer";
import { createContext, useState } from "react";

export const ProductContext = createContext();
export const CartContext = createContext();

const App = () => {
  const {products,initialCart} = useLoaderData();
  // ekhane initialCart hocce locastorage e item add howar array 
  // r products hocce shobgulo item
  const [cart,setCart] = useState(initialCart);

  return (
    <ProductContext.Provider value={products}>
       <CartContext.Provider value={[cart,setCart]}>
       <Header />
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet />
      </div>
      <Footer />
       </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
