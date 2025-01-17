import { useState, useEffect } from "react";

const useSimulFetch = (simulData : {}[]=[] , delay:number=2000) => {
    const [data, setData] = useState<{}[]|null>(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setData(simulData);
        }, delay);
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);
    return data;
};

export default useSimulFetch;