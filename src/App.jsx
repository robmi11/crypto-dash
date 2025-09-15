import { useState, useEffect } from "react";
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
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      {coins.length > 0 &&
        coins.map((coin) => <h2 key={coin.id}>{coin.name}</h2>)}
    </div>
  );
}
