import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AsideProductTitles from './AsideProductTitles';

// eslint-disable-next-line
const Aside = ({ products }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product-categories')
            .then(r => r.json())
            .then(d => setCategories(d));
    }, [])

    return (
        <div className='aside-bg p-5 md:p-7 md:m-5 rounded-md'>
            <div data-aos="flip-left" data-aos-duration="500" className='rounded-md'>
                <h2 className='text-center bg-sky-800 text-white p-2 rounded-t-md'>Categories</h2>
                <ul className="menu bg-base-100 lg:w-56 rounded-b-md justify-center">

                    {
                        categories.map(category =>
                            <li className='w-full block justify-center' key={category.category_id}><Link className='mx-auto' to={`/product-category/${category.category_id}`}>{category.category_name}</Link></li>)
                    }
                </ul>
            </div>
            <div data-aos="flip-right" data-aos-duration="500" className='rounded-md mt-7'>
                <h2 className='text-center bg-sky-800 text-white p-2 rounded-t-md'>Products</h2>
                <ul className="menu bg-base-100 lg:w-56 rounded-b-md">
                    {
                        // eslint-disable-next-line
                        products.map(product => <AsideProductTitles
                            key={product._id} product={product}
                        ></AsideProductTitles>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Aside;