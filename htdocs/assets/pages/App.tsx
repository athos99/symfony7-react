import React from "react";
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Base from "./Base";
import Home from "./Home";
import DragAndDropApp from "./DragAndDropApp";


const routes = [
        {
            path: '/',
            element: <Base/>
        },
        {
            children: [
                {
                    path: "/home",
                    element: <Home/>
                },
                {
                    path: "/drag",
                    element: <DragAndDropApp/>
                }
            ]
        }
    ]
;


export default function App({basename}: { basename: string }) {
    return (
        <>
            <i>blalldldld</i>
            <RouterProvider router={createBrowserRouter(routes, {basename: basename})}/>
        </>
    );
}