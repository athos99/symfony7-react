import {NavLink, useLoaderData, useParams} from "react-router";
import {ROUTEURL} from "./App";

export default function Blog() {
    const posts  = useLoaderData()
    return <div><h2>Mon blog</h2>
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>
                   <NavLink  to={ROUTEURL.article+post.id}>{post.title}</NavLink>
               </li>
            ))}

        </ul>
</div>
}