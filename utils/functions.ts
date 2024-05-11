import { Property } from "@prisma/client";

export function getPropertyImageURL(prop: Property) {
  return `https://venda-imoveis.caixa.gov.br/fotos/F${prop.origin_id}21.jpg`;
}

export function toCurrency(price: string) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(parseFloat(price));
}

interface ImageSrc {
  src: string;
}
export const loaderProp = ({ src }: ImageSrc) => {
  return src;
};
