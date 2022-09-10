import { useState } from "react";
import "./App.css";

function App() {
  const [initailPrice, setInitailPrice] = useState("");
  const [stocksQuantity, setStocksQuantity] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [result, setResult] = useState("");

  const calculate = (initailPrice, stocksQuantity, currentPrice) => {
    if (initailPrice === "" || stocksQuantity === "" || currentPrice === "")
      alert("Please enter all the fields");
    else {
      const pnl = (currentPrice - initailPrice) * stocksQuantity;
      const profitPercentage =
        (currentPrice * stocksQuantity - initailPrice * stocksQuantity) /
        (initailPrice * stocksQuantity);
      const lossPercentage =
        (currentPrice * stocksQuantity - initailPrice * stocksQuantity) /
        (initailPrice * stocksQuantity);
      if (pnl === 0) setResult("Great...No Loss, No Profit 😊");
      else if (pnl < 0)
        setResult(
          `Your loss is Rs. ${Math.abs(pnl.toFixed(2))}, and you have made ${(
            lossPercentage * 100
          ).toFixed(2)}% on your initial investment 😢.  `
        );
      else
        setResult(
          `Your profit is Rs. ${pnl.toFixed(2)}, and you have made ${(
            profitPercentage * 100
          ).toFixed(2)}% on your initial investment 🥳.  `
        );
    }
  };

  return (
    <div className=" main flex justify-center flex-col gap-5 items-center">
      <div className="container w-[24rem] gap-8 rounded-lg p-5 flex flex-col justify-center items-center">
        <header className=" text-2xl font-semibold">
          Stock Profit & Loss Calculator
        </header>
        <div className=" flex flex-col w-[90%] gap-5 ">
          <input
            type="number"
            id="initialPrice"
            className=" p-2 rounded-lg"
            value={initailPrice}
            onChange={(e) => setInitailPrice(e.target.value)}
            placeholder="Enter the initial price of the stock"
          />
          <input
            type="number"
            id="currentPrice"
            className=" p-2 rounded-lg"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            placeholder="Enter the current price of the stock"
          />
          <input
            type="number"
            id="stocksQuantity"
            className=" p-2 rounded-lg"
            value={stocksQuantity}
            onChange={(e) => setStocksQuantity(e.target.value)}
            placeholder="Enter the quantity of the stocks bought"
          />
        </div>
        <button
          className=" border-2 px-3 py-1 rounded-lg hover:text-white transition-all ease-in-out duration-150 border-gray-500"
          onClick={() => calculate(initailPrice, stocksQuantity, currentPrice)}
        >
          Calculate my Profit/Loss
        </button>
        <button
          className=" border-2 px-3 py-1 rounded-lg hover:text-white transition-all ease-in-out duration-150 border-gray-500"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>
        <p className=" text-center text-xl">{result}</p>
      </div>
      <div className="social-icons flex justify-center items-center gap-5 text-2xl ">
        <p className="footer">Copyright &copy; 2022 - Gurudatt Puranik</p>
        <a href="https://twitter.com/PuranikGurudatt">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/gurudatt-puranik-0933b0195/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/gurudatt_puranik/">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://github.com/gurudattpuranik25">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p className="responsiveFooter">
        Copyright &copy; 2022 - Gurudatt Puranik
      </p>
    </div>
  );
}

export default App;
