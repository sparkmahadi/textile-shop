/* eslint-disable react/prop-types */
import React from 'react';

const ProductTags = ({ tag }) => {
    return (
        <li className='list-disc list-outside mb-2'>
            {tag}
        </li>
    );
};

export default ProductTags;