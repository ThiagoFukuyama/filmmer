import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = () => {
            fetch(url, {
                signal: abortController.signal,
            })
                .then((response) => {
                    if (!response.ok) throw new Error();
                    return response.json();
                })
                .then((data) => setData(data))
                .catch((err) => err.name !== "AbortError" && setError(true))
                .finally(() => setIsLoading(false));
        };

        fetchData();

        return () => {
            if (import.meta.env.PROD) abortController.abort();
            /* React Strict Mode parece afetar o uso do AbortController na cleanup do useEffect,
               em um projeto real melhor utilizar algo como React Query para lidar com isso.  */
        };
    }, [url]);

    return { data, isLoading, error };
};
