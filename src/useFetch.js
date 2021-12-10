import {useState, useEffect} from "react";

const useFetch = () => {
const [isPending, setIsPending] = useState(null);
const {error, setError} = useState(null);

useEffect( () => {
    setTimeout(() => {
        fetch("http://localhost:3000/")
        .then( res => {
            if(!res.ok){
                throw Error("Could not fetch that resource!");
            }
            return res.json();
        })
        .then( data => {
            setError(null);
        })
        .catch( err => {
            setIsPending(false);
            setError(err.message);
        })
    }, 1000);

}, []);
    
};

export default useFetch;