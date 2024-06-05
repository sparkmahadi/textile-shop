/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const AsideProductTitles = ({ product }) => {
    return (
        
        <li className='lg:mx-auto py-1'>
            <Link to={`/product-details/${product?._id}`}>
                {product.name}
            </Link>
        </li>
    );
};

export default AsideProductTitles;