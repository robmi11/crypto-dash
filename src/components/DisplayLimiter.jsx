import { useContext } from "react";
import { CoinsContext } from "../context/CoinsContext";

export default function DisplayLimiter() {
  const { limit, setLimit } = useContext(CoinsContext);

  return (
    <div className="controls">
      <label htmlFor="show">Pokaż:</label>
      <select
        onChange={(event) => setLimit(+event.target.value)}
        value={limit}
        id="show">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}
