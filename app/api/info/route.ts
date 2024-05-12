import prisma from "@/prisma/db/db";

export async function GET() {
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
  const distinctCitiesCount = await prisma.property.groupBy({
    by: ["city"],
    _count: true,
  });
  console.log(distinctCitiesCount.length);
  return Response.json({
    numberOfActives: actives._count.id,
    numberOfProperties: totalProperties._count.id,
    priceSum: totalPrice._sum.price,
    numberOfPropertiesSold: sold._count.id,
    distinctCitiesAmount: distinctCitiesCount.length,
  });
}
