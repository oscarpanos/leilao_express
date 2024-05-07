import { Property } from "@prisma/client";

export function getPropertyImageURL(prop: Property) {
  return `https://venda-imoveis.caixa.gov.br/fotos/F${prop.origin_id}21.jpg`;
}
