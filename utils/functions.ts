export const toCurrency = (value: string) => {
  const floatPrice = parseFloat(value);
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(floatPrice);
};
