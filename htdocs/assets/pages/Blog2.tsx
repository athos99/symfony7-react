import {Await, NavLink, useAsyncValue, useLoaderData, useParams} from "react-router";
import {ROUTEURL} from "./App";
import {ReactNode, Suspense} from "react";
import Spinner from "./Spinner";


function PostsList() {
    const posts = useAsyncValue() as {id:string,title:string}[]
    return <>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <NavLink to={ROUTEURL.article + post.id}>{post.title}</NavLink>
                </li>
            ))}
        </ul>
    </>
}


export default function Blog2() {
    const {posts} = useLoaderData();
    return <div>
        <h2>Mon blog</h2>
        <Suspense fallback={<Spinner/>}>
            <Await resolve={posts}>
                <PostsList/>
            </Await>
        </Suspense>
    </div>
}
