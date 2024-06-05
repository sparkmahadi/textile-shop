import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorRoute from "../pages/ErrorRoute/ErrorRoute";
import Products from "../pages/Products/Products";
import FAQ from "../pages/Home/FAQ/FAQ";
import ProductDetails from "../pages/Products/ProductDetails";
import SingleProductDetails from "../pages/Products/SingleProductDetails/SingleProductDetails";
import ProductCategories from "../pages/Products/ProductCategories/ProductCategories";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorRoute/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path: "/products",
                element: <Products/>,
                loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path: '/product-details/:id',
                element: <SingleProductDetails/>,
                loader: ({ params }) => fetch(`http://localhost:5000/product-details/${params.id}`)
            },
            {
                path: '/product-category/:id',
                element: <ProductCategories/>,
                loader: ({ params }) => fetch(`http://localhost:5000/product-category/${params.id}`)
            },
            {
                path: "/faq",
                element: <FAQ/>
            },
        ]
    }
])