import prisma from "@/prisma/db/db";

interface Params {
  params: { city: string };
}

export async function GET(res: Response, { params }: Params) {
  const { city } = params;
  const modalities = await prisma.property.findMany({
    select: { modality: true },
    where: {
      city: {
        mode: "insensitive",
        equals: city,
      },
    },
    orderBy: { modality: "asc" },
    distinct: "modality",
  });

  return Response.json(modalities);
}
