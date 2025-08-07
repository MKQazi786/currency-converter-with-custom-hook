import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  let [data, setData] = useState({});
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-08-01/v1/currencies/${currency}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
};

export default useCurrencyInfo;
