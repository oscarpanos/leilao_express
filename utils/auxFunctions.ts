import { Property } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

interface getInfoTypes {
  numberOfActives: number;
  numberOfProperties: number;
  priceSum: Decimal;
  numberOfPropertiesSold: number;
  distinctCitiesAmount: number;
}

export function getPropertyImageURL(prop: Property) {
  return `https://venda-imoveis.caixa.gov.br/fotos/F${prop.origin_id}21.jpg`;
}

export function toCurrency(price: string) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(parseFloat(price));
}

export async function getPropertiesInfo() {
  const req = await fetch(`${process.env.NEXTAUTH_URL}/api/info`);
  if (req.ok) return req.json();
}
