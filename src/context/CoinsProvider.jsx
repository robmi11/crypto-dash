import { useEffect, useState } from "react";
import { CoinsContext } from "./CoinsContext";
import { options } from "../utils/opt";

export default function CoinsProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrot] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

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

  const filteredCoins = coins
    .filter((coin) => {
      return (
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
      );
    })
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case "market_cap_desc":
          return b.market_cap - a.market_cap;
        case "market_cap_asc":
          return a.market_cap - b.market_cap;
        case "price_desc":
          return b.current_price - a.current_price;
        case "price_asc":
          return a.current_price - b.current_price;
        case "change_desc":
          return (
            b.market_cap_change_percentage_24h -
            a.market_cap_change_percentage_24h
          );
        case "change_asc":
          return (
            a.market_cap_change_percentage_24h -
            b.market_cap_change_percentage_24h
          );
        default:
          break;
      }
    });

  return (
    <CoinsContext.Provider
      value={{
        limit,
        coins,
        loading,
        error,
        filter,
        sortBy,
        filteredCoins,
        setFilter,
        setLimit,
        setSortBy,
      }}>
      {children}
    </CoinsContext.Provider>
  );
}
