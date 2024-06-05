
import { useLoaderData } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Aside from '../Aside/Aside';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className="md:flex md:flex-row-reverse 2xl:px-56">

            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 py-6">


                <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {
                        products.map(product =>
                            <ProductDetails
                                key={product._id}
                                product={product}
                            ></ProductDetails>)
                    }

                </div>
            </div>

            <div className='px-5 md:px-0 py-10 md:py-0'>
                <Aside products={products}></Aside>
            </div>

        </div>
    );
};

export default Products;