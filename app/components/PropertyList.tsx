import Link from "next/link";
import Image from "next/image";

import prisma from "@/prisma/db/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPropertyImageURL } from "@/utils/cef";

const toCurrency = (value: string) => {
  const floatPrice = parseFloat(value);
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(floatPrice);
};

export default async function PropertyList() {
  const properties = await prisma.property.findMany({
    take: 10,
  });

  return (
    <div className="flex flex-wrap gap-4 border p-10">
      {properties.map((p) => (
        <Card className="w-[350px]" key={p.id}>
          <CardHeader>
            <CardTitle>
              {p.district} - {p.city}/{p.state}
            </CardTitle>
            <CardDescription>{p.description.split(",")[2]}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative size-40">
              <Image
                alt={p.type}
                src={getPropertyImageURL(p)}
                sizes="320px"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="font-bold"></div>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col items-center">
                <div>Preço</div>
                <div>{toCurrency(p.price.toString())}</div>
              </div>
              <div className="flex flex-col items-center">
                <div>Avaliação</div>
                <div>{toCurrency(p.evaluation_price.toString())}</div>
              </div>
              <div className="flex flex-col items-center">
                <div>Desconto</div>
                <div>{p.discount.toString()}%</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="text-sm">{p.description}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
