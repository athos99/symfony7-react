import React, {Suspense} from "react";
import {createBrowserRouter, BrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Ex1 from "./pages/Ex1";
import Ex2 from "./pages/Ex2";
import Ex3 from "./pages/Ex3";
import Ex4 from "./pages/Ex4";
import Ex5 from "./pages/Ex5";
import Ex6 from "./pages/Ex6";
import {ThankYouPage} from "./pages/ThankYouPage";
import {ContactPage, contactPageAction} from "./pages/ContactPage";
import {HomePage} from "./pages/product/HomePage";
import {ProductsPage} from "./pages/product/ProductsPage";
import {ProductPage} from "./pages/product/ProductPage";
import AdminPage from "./pages/product/AdminPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/ex1", Component: Ex1
            },
            {
                path: "/ex2", Component: Ex2
            },
            {
                path: "/ex3", Component: Ex3
            },
            {
                path: "/ex4", Component: Ex4
            },
            {
                path: "/ex5", Component: Ex5
            },
            {
                path: "/ex6", Component: Ex6
            },
            {
                path: '/ex7',
                element: <Navigate to="/contact"/>,
            },
            {
                path: '/contact',
                element: <ContactPage/>,
                action: contactPageAction,
            },
            {
                path: '/thank-you/:name',
                element: <ThankYouPage/>,
            },
            {
                path: 'products',
                index: true,
                element: <HomePage />,
            },
            {
                path: 'products/products',
                element: <ProductsPage />,
            },
            {
                path: 'products/products/:id',
                element: <ProductPage />,
            },
            {
                path: 'products/admin',
                element: (
                    <Suspense
                        fallback={<div className="text-center p-5 text-xl text-slate-900">Loading...</div>}
                    >
                        <AdminPage />
                    </Suspense>
                ),
            },


            {
                path: "*", Component: NoPage
            },
        ]
    },
]);


export default function App(param: { basename?: string }) {
    return (
        <RouterProvider router={router}/>
    );
}
