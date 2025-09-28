export const plnDisplay = (pln) =>
  new Intl.NumberFormat("pl-PL", { style: "currency", currency: "pln" }).format(
    pln
  );
