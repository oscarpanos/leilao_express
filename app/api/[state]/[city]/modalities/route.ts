import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
import prisma from "@/prisma/db/db";

interface Params {
  params: { city: string };
}

const GET = async (req: NextRequest, { params }: Params) => {
  const { city } = params;
  const modalities = await prisma.property.findMany({
    select: { modality: true },
    where: {
      city: {
        mode: "insensitive",
        equals: city,
      },
      active: true,
    },
    orderBy: { modality: "asc" },
    distinct: "modality",
  });

  return NextResponse.json(modalities);
};

export { GET };
