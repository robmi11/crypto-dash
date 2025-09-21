export default function FilterInput({ filter, onFilterChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)}
        placeholder="Filter coins by name or symbol"
      />
    </div>
  );
}
