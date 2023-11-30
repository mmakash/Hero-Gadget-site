/* eslint-disable react/prop-types */
import React from 'react';

const ProductsCard = ({ product, handleAddToCart }) => {
    const { name, price, category, picture } = product;
    return (
        <div className='bg-gray-100 p-6 rounded shadow-lg text-center space-y-3'>
            <img className='w-full object-cover h-56 rounded' src={picture} alt="" />
            <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
            <p className='text-gray-800'>{price}</p>
            <p className='text-gray-800 font-bold'>{category}</p>
            <button onClick={() => handleAddToCart(product)} className='btn-primary w-full block'>Add to cart</button>
        </div>
    );
};

export default ProductsCard;