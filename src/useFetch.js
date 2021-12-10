import {useState, useEffect} from "react";

const useFetch = (url) => {
const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(null);
const {error, setError} = useState(null);

    useEffect( () => {
        const AbortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: AbortCont.signal })
            .then( res => {
                if(!res.ok){
                    throw Error("Could not fetch that resource!");
                }
                return res.json();
            })
            .then( data => {
                setData(data);
                setError(null);
            })
            .catch( err => {
                if(err.name === "AbortError"){
                    console.log("fetch aborted");
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        }, 1000);
    }, [url]);

    return {data, isPending, error};
    
};

export default useFetch;