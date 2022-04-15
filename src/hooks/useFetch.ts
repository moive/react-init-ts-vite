import { useEffect, useState } from "react";
type DataArray = {
    results: []
}

export const useFetch = (url: string) => {
    const [data, setData] = useState<DataArray | null>(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState({ err: true });

    useEffect(() => {
        getData(url);
    }, [url])

    const getData = async (url: string) => {
        try {
            let res = await fetch(url);
            if (!res.ok) {
                throw {
                    err: true,
                    status: res.status,
                    statusText: !res.statusText ? "A mistake ocurred" : res.statusText
                }
            }

            let data = await res.json();

            setIsPending(false);
            setData(data);
            setError({ err: false });
        } catch (e: any) {
            setIsPending(true);
            setError(e)
        }
    }
    return { data, isPending, error }
}