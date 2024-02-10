import { useEffect, useState} from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        let fetchData = async () => {
            try {
                let r = await fetch(
                    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
                );
                let res = await r.json();
                // console.log(`before `,data)
                setData(res[currency]);
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
