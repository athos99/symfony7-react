import {useParams} from "react-router";

export default function Article() {
    const {id}= useParams();
    return <div><h2>Article {id}</h2></div>
}