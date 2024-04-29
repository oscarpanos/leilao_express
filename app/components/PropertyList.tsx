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
    <div className="flex flex-wrap justify-center gap-4 border p-10">
      {properties.map((p) => (
        <Link
          className="min-w-[280px] max-w-[420px] grow"
          href={p.url}
          key={p.id}
          target="_blank"
        >
          <Card className="group flex grow cursor-pointer flex-col gap-1">
            <CardHeader className="p-4">
              <CardTitle className="text-lg">
                {p.city}/{p.state}
              </CardTitle>
              <CardDescription>{p.description.split(",")[2]}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative h-48 w-full">
                <Image
                  alt={p.type}
                  src={getPropertyImageURL(p)}
                  sizes="320px"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute hidden h-full place-items-center bg-white/70 px-4 text-sm group-hover:grid">
                  {p.description}
                </div>
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
          </Card>
        </Link>
      ))}
    </div>
  );
}
