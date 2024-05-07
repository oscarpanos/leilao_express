import prisma from "@/prisma/db/db";

interface Params {
  params: { state: string };
}

export async function GET(res: Response, { params }: Params) {
  const { state } = params;
  const cities = await prisma.property.findMany({
    select: { city: true },
    where: {
      state: {
        mode: "insensitive",
        contains: state,
      },
    },
    orderBy: { city: "asc" },
    distinct: "city",
  });

  return Response.json(cities);
}
