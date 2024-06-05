import React from 'react';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ErrorRoute = () => {
    return (
        <div className='bg-gray-100 py-10'>
            <div className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                <div className='container flex flex-col items-center justify-center p-5 mx-auto my-'>
                    <MdOutlineErrorOutline className='w-24 h-24 text-gray-600' />
                    <div className='max-w-md text-center'>
                        <h2 className='mb-5 lg:mb-8 font-extrabold text-xl lg:text-3xl md:text-7xl text-gray-600'>
                            404 Error!
                        </h2>
                        <p className='text-lg font-semibold md:text-3xl mb-5 lg:mb-8'>
                            Sorry, this page is not availabe.
                        </p>
                        <Link
                            to='/'
                            className='px-2 md:px-8 py-2 font-semibold rounded bg-cyan-600 text-white text-sm'
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorRoute;