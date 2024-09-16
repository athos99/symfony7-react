import { useState, useEffect } from "react";
import myFetch from "./myFetch";


const useMyFetch = (str:string, timeout :number) => {
    const [data, setData] = useState<string|null>(null);
    useEffect(() => {
        myFetch(str,timeout)
            .then((x) => setData(x));
    }, [str,timeout]);
    return [data];
};


export default useMyFetch;