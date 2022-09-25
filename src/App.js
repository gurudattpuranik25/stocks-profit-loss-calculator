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
    <div className=" main">
      <div className="container">
        <header className=" heading">Stock Profit & Loss Calculator</header>
        <div className=" input__block ">
          <input
            type="number"
            id="initialPrice"
            className=" input__style"
            value={initailPrice}
            onChange={(e) => setInitailPrice(e.target.value)}
            placeholder="Enter the initial price of the stock"
          />
          <input
            type="number"
            id="currentPrice"
            className=" input__style"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            placeholder="Enter the current price of the stock"
          />
          <input
            type="number"
            id="stocksQuantity"
            className=" input__style"
            value={stocksQuantity}
            onChange={(e) => setStocksQuantity(e.target.value)}
            placeholder="Enter the quantity of the stocks bought"
          />
        </div>
        <button
          className=" btn"
          onClick={() => calculate(initailPrice, stocksQuantity, currentPrice)}
        >
          Calculate my Profit/Loss
        </button>
        <button className=" btn" onClick={() => window.location.reload()}>
          Reset
        </button>
        <p className=" result">{result}</p>
      </div>
      <div className="social__icons ">
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
