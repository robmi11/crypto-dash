import { useState, useEffect } from "react";
import CoinCard from "./components/CoinCard";
import DisplayLimiter from "./components/DisplayLimiter";
const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": "CG-kKkDjRJ2gmbcjA5YEnHnB6bv" },
  body: undefined,
};

export default function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrot] = useState(null);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    async function getCoins() {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }&per_page=${limit}&sparkline=false&order=market_cap_desc`,
          options
        );
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
  }, [limit]);

  return (
    <>
      {loading ? (
        <h1>Fetching coins data...</h1>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <h1>🚀 Crypto Dash</h1>
          <DisplayLimiter
            limit={limit}
            changeLimit={setLimit}
          />
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
