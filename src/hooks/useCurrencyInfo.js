import { useEffect, useState} from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        let fetchData = async () => {
            try {
                let r = await fetch(
                    `https://open.er-api.com/v6/latest/${currency}`
                );
                let res = await r.json();
                // console.log(`before `,data)
                // setData(res[currency]);
                setData(res.rates)
                // console.log(`after `,data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [currency]);
    // console.log(data)
    return data;
}

export default useCurrencyInfo;
