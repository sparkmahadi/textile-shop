import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetails from '../ProductDetails';
import Aside from '../../Aside/Aside';

const ProductCategories = () => {
    const [products, setProducts] = useState([]);
    const selectedProducts = useLoaderData();
    console.log(selectedProducts);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(r => r.json())
            .then(d => setProducts(d))
    }, [])
    console.log(products);
    return (
        <div>
            <div className="md:flex md:flex-row-reverse 2xl:px-56">

                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 py-6">


                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            selectedProducts.map(product =>
                                <ProductDetails
                                    key={product.product_id}
                                    product={product}
                                ></ProductDetails>)
                        }
                    </div>
                </div>

                <div className='px-5 md:px-0 py-10 md:py-0'>
                    <Aside products={products}></Aside>
                </div>

            </div>
        </div>
    );
};

export default ProductCategories;