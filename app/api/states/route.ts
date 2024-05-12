import { NextResponse } from "next/server";

import prisma from "@/prisma/db/db";

const GET = async () => {
  const states = await prisma.property.findMany({
    select: { state: true },
    distinct: "state",
    orderBy: { state: "asc" },
  });

  return NextResponse.json(states);
};

export { GET };
