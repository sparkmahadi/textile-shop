/* eslint-disable react/prop-types */
import React from 'react';
import { HiCheckCircle } from 'react-icons/hi'

const ProductDetailsPoints = ({ point }) => {
    return (
        <li className='flex items-center'>
            <HiCheckCircle className='mr-2 h-5 w-5'></HiCheckCircle>
            {point}
        </li>
    );
};

export default ProductDetailsPoints;