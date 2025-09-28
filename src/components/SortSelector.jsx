import { useContext } from "react";
import { CoinsContext } from "../context/CoinsContext";

export default function SortSelector() {
  const { sortBy, setSortBy } = useContext(CoinsContext);

  return (
    <div className="controls">
      <label htmlFor="sort">Sort by:</label>
      <select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
        id="sort">
        <option value="market_cap_desc">Market Cup (High to Low)</option>
        <option value="market_cap_asc">Market Cup (Low to High)</option>
        <option value="price_desc">Price (High to Low)</option>
        <option value="price_asc">Price (Low to High)</option>
        <option value="change_desc">24H Change (High to Low)</option>
        <option value="change_asc">24H Change (Low to High)</option>
      </select>
    </div>
  );
}
