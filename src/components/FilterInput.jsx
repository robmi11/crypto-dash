import { useContext } from "react";
import { CoinsContext } from "../context/CoinsContext";

export default function FilterInput() {
  const { filter, setFilter } = useContext(CoinsContext);
  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filtruj waluty przez nazwę lub symbol"
      />
    </div>
  );
}
