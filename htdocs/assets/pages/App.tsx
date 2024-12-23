import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Base from "./Base";
import Home from "./Home";



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
                    element: <DargCardApp/>
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