import { useContext } from "react";
import { Link } from "react-router";
import { CoinsContext } from "../context/CoinsContext";
import CoinCard from "../components/CoinCard";
import DisplayLimiter from "../components/DisplayLimiter";
import FilterInput from "../components/FilterInput";
import SortSelector from "../components/SortSelector";

export default function HomePage() {
  const { filteredCoins, error, loading } = useContext(CoinsContext);

  return (
    <>
      {loading ? (
        <h1>Fetching coins data...</h1>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <h1>🚀 Crypto Dash!</h1>
          <div className="top-controls">
            <FilterInput />
            <DisplayLimiter />
            <SortSelector />
          </div>
          <main className="grid">
            {filteredCoins.length > 0 ? (
              filteredCoins.map((coin) => (
                <Link
                  key={coin.id}
                  to={`/coin/${coin.id}`}>
                  <CoinCard coin={coin} />
                </Link>
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
