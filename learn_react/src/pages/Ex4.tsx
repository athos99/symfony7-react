import React from "react";
import useMyFetch from "../Composant/useMyFetch";



export default function Ex4() {
    const data = useMyFetch( 'coucou',1400);
    return (
        <>
            <h1>Ex4</h1>
            <div>{data}</div>
            <div>***</div>
        </>
    );
};


