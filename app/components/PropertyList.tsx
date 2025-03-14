import Link from "next/link";
import Image from "next/image";
import { Property } from "@prisma/client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { toCurrency, getPropertyImageURL } from "@/utils/auxFunctions";

import PropertyFilter from "./PropertyFilter";

interface PropertyListProps {
  properties: Property[];
}

export default async function PropertyList({ properties }: PropertyListProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-4 rounded-md border-slate-600 bg-slate-100 p-4 shadow-lg">
        <div className="flex w-full items-center justify-between md:p-0">
          <h1 className="text-2xl">
            Imóveis - {properties.length} encontrados
          </h1>
          <PropertyFilter />
        </div>
        {properties.map((p) => (
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
                    alt={`${p.type} no ${p.district}`}
                    src={getPropertyImageURL(p)}
                    sizes="320px"
                    unoptimized
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
                        <span className="font-bold text-blue-500">
                          {p.discount.toString() + "%"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter
                className={`flex w-full justify-center rounded-b border-t ${p.origin.includes("Caixa") ? "bg-slate-900" : "bg-[#CC092F]"} text-xs font-semibold text-white`}
              >
                <span
                  className={`${p.origin.includes("Caixa") ? "text-[#F19E00]" : "text-white"}`}
                >
                  <span className="font-bold">{p.modality}</span> - {p.origin}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
