import { useState, useEffect } from "react";
import CoinCard from "./components/CoinCard";
import DisplayLimiter from "./components/DisplayLimiter";
import FilterInput from "./components/FilterInput";
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
  const [filter, setFilter] = useState("");

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

  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(filter.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <>
      {loading ? (
        <h1>Fetching coins data...</h1>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <h1>🚀 Crypto Dash</h1>
          <div className="top-controls">
            <FilterInput
              filter={filter}
              onFilterChange={setFilter}
            />
            <DisplayLimiter
              limit={limit}
              changeLimit={setLimit}
            />
          </div>
          <main className="grid">
            {filteredCoins.length > 0 ? (
              filteredCoins.map((coin) => (
                <CoinCard
                  key={coin.id}
                  coin={coin}
                />
              ))
            ) : (
              <p>
                Nie znaleziono krypowaluty zgodnej z parametrami wyszukiwania.
              </p>
            )}
          </main>
        </>
      )}
    </>
  );
}
