import React from "react";
import useFetch from "../Composant/useFetch";



export default function Ex3() {
    const[data] = useFetch("https://cat-fact.herokuapp.com/facts/");
    return (
        <>
            <h1>Ex3</h1>
            <ul>
                {data &&
                    data.map((item) => {
                        return <li key={item._id}>{item.text}</li>;
                    })}
            </ul>
            <div>généré par le script htdocs/assets/react/controllers/CatFacts.jsx</div>
        </>
    );
};


