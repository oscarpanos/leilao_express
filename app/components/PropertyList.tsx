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
  const allProperties = await prisma.property.findMany({
    take: 50,
  });

  return (
    <div className="flex flex-wrap justify-center gap-4 border p-10">
      {allProperties.map((p) => (
        <Link
          className="min-w-[280px] max-w-[420px] grow"
          href={p.url}
          key={p.id}
          target="_blank"
        >
          <Card className="group flex grow cursor-pointer flex-col gap-1 transition-all hover:scale-105 hover:border-slate-400 hover:shadow-lg">
            <CardHeader className="p-4">
              <CardTitle className="text-lg">
                {p.city}/{p.state}
              </CardTitle>
              <CardDescription className="text-sm">
                {p.type}, bairro{" "}
                <span className="font-semibold">{p.district}</span>
              </CardDescription>
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
                <div className="absolute hidden h-full place-items-center bg-white/70 px-4 text-sm font-bold group-hover:grid">
                  {p.description}
                </div>
              </div>
              <div className="mt-4 flex w-full justify-between gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-full border-b text-center text-sm font-bold">
                    Preço
                  </div>
                  <div className="font-semibold text-green-700">
                    {toCurrency(p.price.toString())}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full border-b text-center text-sm font-bold">
                    Avaliação
                  </div>
                  <div className="">
                    {toCurrency(p.evaluation_price.toString())}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full border-b text-center text-sm font-bold">
                    Desconto
                  </div>
                  <div>
                    {p.discount.toString() < "1" ? (
                      "-"
                    ) : (
                      <span className="font-bold text-red-500">
                        {p.discount.toString() + "%"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex w-full justify-center rounded-b border-t bg-slate-600 text-xs font-semibold text-white ">
              {p.origin}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
