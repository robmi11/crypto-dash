export default function SortSelector({ sortBy, onSortChange }) {
  return (
    <div className="controls">
      <label htmlFor="sort">Sortuj:</label>
      <select
        value={sortBy}
        onChange={(event) => onSortChange(event.target.value)}
        id="sort">
        <option value="market_cap_desc">Kapitalizacja (Malejąco)</option>
        <option value="market_cap_asc">Kapitalizacja (Rosnąco)</option>
        <option value="price_desc">Cena (Malejąco)</option>
        <option value="price_asc">Cena (Rosnąco)</option>
        <option value="change_desc">Zmiana Dobowa (Malejąco)</option>
        <option value="change_asc">Zmiana Dobowa (Rosnąco)</option>
      </select>
    </div>
  );
}
