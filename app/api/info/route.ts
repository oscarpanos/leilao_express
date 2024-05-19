export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import { NextResponse } from "next/server";

import prisma from "@/prisma/db/db";

const GET = async () => {
  const actives = await prisma.property.aggregate({
    where: {
      active: true,
    },
    _count: {
      id: true,
    },
  });
  const sold = await prisma.property.aggregate({
    where: {
      active: false,
    },
    _count: {
      id: true,
    },
  });
  const totalProperties = await prisma.property.aggregate({
    _count: {
      id: true,
    },
  });
  const totalPrice = await prisma.property.aggregate({
    where: {
      active: true,
    },
    _sum: {
      price: true,
    },
  });
  const distinctCitiesCount = await prisma.property.findMany({
    select: { city: true },
    distinct: ["city"],
  });
  return NextResponse.json({
    numberOfActives: actives._count.id,
    numberOfProperties: totalProperties._count.id,
    priceSum: totalPrice._sum.price,
    numberOfPropertiesSold: sold._count.id,
    numberOfCities: distinctCitiesCount.length,
  });
};

export { GET };
