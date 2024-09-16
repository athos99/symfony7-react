import React from "react";
import { useParams } from 'react-router-dom';


export function ThankYouPage() {
    const {name} = useParams<{ name: string }>();
    return (
        <div className="flex flex-col py-10 max-w-md       mx-auto">
            <div> Thanks {name}, we will be in touch shortly</div>
        </div>
    );
};


