export default function CoinCard({ coin }) {
  return (
    <div
      className="coin-card"
      key={coin.id}>
      <div className="coin-header">
        <img
          src={coin.image}
          alt={coin.name}
          className="coin-image"
        />
        <div>
          <h2>{coin.name}</h2>
          <p className="symbol">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>
      <p>
        Cena:{" "}
        {new Intl.NumberFormat("pl-PL", {
          style: "currency",
          currency: "PLN",
        }).format(coin.current_price)}
      </p>
      <p
        className={
          coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
        }>
        {coin.price_change_percentage_24h.toFixed(2)} %
      </p>
      <p>
        {new Intl.NumberFormat("pl-PL", {
          style: "currency",
          currency: "PLN",
        }).format(coin.market_cap)}
      </p>
    </div>
  );
}
