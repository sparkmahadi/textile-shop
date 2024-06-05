/* eslint-disable react/prop-types */
import React from 'react';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { GiDuration, GiLevelEndFlag } from 'react-icons/gi';
import './ProductDetails.css'
import { Link } from 'react-router-dom';

const ProductDetails = ({ product }) => {
    const { _id,
        product_id,
        name,
        description,
        category_id,
        price,
        currency,
        stock,
        material,
        dimensions,
        care_instructions,
        image_url,
        tags } = product;
    
    return (
        <div data-aos="zoom-in-up" data-aos-duration="500" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 card-p-bg rounded shadow-xl px-1 pt-1">
            <div className="p-5 bg-card rounded-md text-white">
                <div className="mx-auto">
                    <img className='rounded-md mx-auto' src={image_url} alt="" />
                </div>
                <div className="my-2 font-bold flex justify-center items-top rounded-md">
                    <MdOutlineDriveFileRenameOutline className='w-6 h-6 mr-2' />
                    <h3>{name}</h3>
                </div>

                <div className="text-sm flex justify-center items-top rounded-md mt-2">
                    <GiLevelEndFlag className='w-5 h-5 mr-2' />
                    <p>{description}</p>
                </div>

                <div className="text-sm flex justify-center items-top rounded-md mt-2">
                    <GiDuration className='w-5 h-5 mr-2' />
                    <p>Price: {price} {currency}</p>
                </div>

                <Link to={`/product-details/${product_id}`}>
                    <div className='border border-sky-500 nav-bg text-md flex justify-center items-center text-white rounded-md mt-2 px-2 py-1'>
                        <FaLongArrowAltRight className='w-5 h-5 mr-2' />
                        <button className='text-white'>

                            See Details
                        </button>
                    </div>
                </Link>
            </div>
        </div >
    );
};

export default ProductDetails;