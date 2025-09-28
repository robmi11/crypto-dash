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
        placeholder="Filter coins by name or symbol"
      />
    </div>
  );
}
