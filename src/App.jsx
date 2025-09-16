import { useState, useEffect } from "react";
import CoinCard from "./components/CoinCard";
const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&per_page=10&sparkline=false&order=market_cap_desc";
const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": "CG-kKkDjRJ2gmbcjA5YEnHnB6bv" },
  body: undefined,
};

export default function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrot] = useState(null);

  useEffect(() => {
    async function getCoins() {
      try {
        const response = await fetch(API_URL, options);
        if (!response.ok) {
          throw new Error("Error fetching coins data!");
        }
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        setErrot(error?.data?.message || error?.message);
      } finally {
        setLoading(false);
      }
    }

    getCoins();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Fetching coins data...</h1>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <h1>🚀 Crypto Dash</h1>
          <main className="grid">
            {coins.map((coin) => (
              <CoinCard
                key={coin.id}
                coin={coin}
              />
            ))}
          </main>
        </>
      )}
    </>
  );
}
