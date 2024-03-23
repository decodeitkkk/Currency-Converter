import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");

    let currencyOptionsFromAPI = useCurrencyInfo(from);

    let CO = Object.keys(currencyOptionsFromAPI);

    let inputValue = 10;
    let handleFrom = (e) => {
        console.log(`amount--- ${amount}`);
    };

    let swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    let convert = () => {
        console.log(`to = ${Number(currencyOptionsFromAPI[to])}`);

        setConvertedAmount(
            (Number(amount) * Number(currencyOptionsFromAPI[to])).toFixed(3)
        );
    };

    useEffect(() => {
        setConvertedAmount(
            (Number(amount) * Number(currencyOptionsFromAPI[to])).toFixed(3)
        );
    }, [amount, from, to, swap]);

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1604689598793-b8bf1dc445a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <div className="w-full px-4  ">
                <div className="w-full max-w-md mx-auto border border-gray-60  rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                inputValue={amount}
                                handleChange={setAmount}
                                currencyOptions={CO}
                                handleCurrencyChange={setFrom}
                                defaultCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                inputValue={convertedAmount}
                                currencyOptions={CO}
                                handleCurrencyChange={setTo}
                                defaultCurrency={to}
                                disabled={true}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                            onClick={convert}
                        >
                            {`Converting ${from.toUpperCase()} to ${to.toUpperCase()}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
