import {Await, NavLink, useAsyncValue, useLoaderData, useParams} from "react-router";
import {ROUTEURL} from "./App";
import {Suspense} from "react";
import Spinner from "./DragCard/Spinner";

export default function Blog2() {
    const posts = useLoaderData();
    return <div><h2>Mon blog</h2>
        <Suspense fallback={<Spinner/>}>
            <Await resolve={posts}>
<PostsList/>
            </Await>
        </Suspense>
    </div>
}

function PostsList() {
    const posts = useAsyncValue()
    console.log(posts)
    return
    <ul>
        {posts.map((post) => (
            <li key={post.id}>
                <NavLink to={ROUTEURL.article + post.id}>{post.title}</NavLink>
            </li>
        ))}
    </ul>

}