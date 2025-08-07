import BG from "./photos/bg2.jpg";
import Input from "./components/input";
import React, { useId, useState } from "react";
import useCurrencyInfo from "./hooks/currency";

function App() {
  let [amountFrom, setAmountFrom] = useState();
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("pkr");
  let [amountTo, setAmountTo] = useState(0);

  let currencyinfo = useCurrencyInfo(from.toLowerCase());

  let options = Object.keys(currencyinfo);
  let swap = () => {
    setFrom(to);
    setTo(from);
    setAmountTo(amountFrom);
    setAmountFrom(amountTo);
  };

  let convert = () => {
    setAmountTo(amountFrom * currencyinfo[to]);
  };
  let amountId = useId();
  return (
    <div
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover" }}
      className="bg-gray-950 bg-repeat h-screen"
    >
      <div className="flex flex-col bg-white/30 shadow-md  border-white p-4 my-auto relative top-10 mx-14 rounded-3xl backdrop-blur-sm main-div">
        <h1 className="bg-amber-500 text-3xl text-center rounded-md py-2">
          Currency converter
        </h1>
        <div className="flex bg-white rounded-md justify-between p-4 mt-4 text-2xl flex-wrap">
          <div className="flex flex-col min-w-1">
            <label htmlFor={amountId} label="from">
              From
            </label>
            <Input amountFrom={amountFrom} onAmountChange={setAmountFrom} />
          </div>
          <div className="flex flex-col gap-5">
            <p>Currency Type</p>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="focus:outline-none cursor-pointer"
            >
              {options.map((currency) => (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="bg-green-500 w-24 rounded-md px-4 py-4 self-center absolute top-48 text-xl swap-btn cursor-pointer"
          onClick={swap}
        >
          Swap
        </button>
        <div className="flex bg-white rounded-md justify-between p-4 mt-4 text-2xl flex-wrap">
          <div className="flex flex-col min-w-1">
            <label htmlFor={amountId} label="To">
              To
            </label>
            <Input amountFrom={amountTo} disabled={true} />
          </div>
          <div className="flex flex-col gap-5">
            <p>Currency Type</p>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="focus:outline-none cursor-pointer"
            >
              {options.map((currency) => (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="text-black bg-green-500 py-4 rounded-sm text-3xl mt-4 cursor-pointer"
          onClick={convert}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
