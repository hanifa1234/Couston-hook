
import React, { useState, useEffect } from 'react'


function useData(url) {

    const [data, setdata] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
       setTimeout(() => {
        fetch(url)

        .then((res) => {
            if (!res.ok) {
                throw Error(" faching is not succsessfull")
            }
            else {
                return res.json()
            }
        })


        .then((data) => {
            setdata(data);
            setIsLoading(false);
            setError(null)
        })


        .case((error) => {
            setError(error.message)
            setIsLoading(false);

        })
}, [url]);
       }, 3000);
    return {data,isLoading,error}
}

export default useData