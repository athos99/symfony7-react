import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Base from "./Base";
import Home from "./Home";
import DragCardApp from "./DragCard/DragCardApp";



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
                    path: "/dragcard",
                    element: <DragCardApp/>
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