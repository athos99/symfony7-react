import React from "react";

import {createBrowserRouter, Outlet, RouterProvider} from "react-router";
import {defer} from "react-router-dom";

import Root from "./Root";
import Home from "./Home";
import DragCardApp from "./DragCard/DragCardApp";
import Article from "./Article";
import PageError from "./PageError";
import Blog from "./Blog";
import Blog2 from "./Blog2";


export const ROUTEURL = {
    root: '/',
    home: '/home',
    blog: '/blog',
    blog2: '/blog2',
    dragcard: '/home/dragcard',
    articleDef: '/blog/article/:id',
    article: '/blog/article/'

}


const routes = [
        {
            path: ROUTEURL.root,
            element: <Root/>,
            errorElement: <PageError/>,
            children: [
                {
                    path: ROUTEURL.home,
                    element: <Home/>
                },

                {
                    path: ROUTEURL.blog,
                    element: <div className={'row'}>
                        <aside className={'col-3'}>
                            <h2>Sidebar 1</h2>
                        </aside>
                        <main className={'col-9'}>
                            <Outlet/>
                        </main>
                    </div>,
                    children: [
                        {
                            path: '',
                            element: <Blog/>,
                            loader: () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                        }, {
                            path: ROUTEURL.articleDef,
                            element: <Article/>
                        }
                    ]
                },
                {
                    path: ROUTEURL.blog2,
                    element: <div className={'row'}>
                        <aside className={'col-3'}>
                            <h2>Sidebar 2</h2>
                        </aside>
                        <main className={'col-9'}>
                            <Outlet/>
                        </main>
                    </div>,
                    children: [
                        {
                            path: '',
                            element: <Blog2/>,
                            loader: () => {
                                const posts = fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(r=>r.json())
                                return defer({posts})
                            }
                        },
                        {
                            path: ':id',
                            element: <Article/>
                        }
                    ]
                },
                {
                    path: ROUTEURL.dragcard,
                    element: <DragCardApp/>
                }

            ]
        }
    ]
;


export default function App({basename}: { basename: string }) {
    return (
        <>
            <RouterProvider router={createBrowserRouter(routes, {basename: basename})}/>
        </>
    );
}