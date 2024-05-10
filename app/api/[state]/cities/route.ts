import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/db/db";

interface Params {
  params: { state: string };
}

const GET = async (req: NextRequest, { params }: Params) => {
  const { state } = params;
  const cities = await prisma.property.findMany({
    select: { city: true },
    where: {
      state: {
        mode: "insensitive",
        contains: state,
      },
      active: true,
    },
    orderBy: { city: "asc" },
    distinct: "city",
  });

  return NextResponse.json(cities);
};

export { GET };
