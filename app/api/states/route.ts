import prisma from "@/prisma/db/db";

export async function GET() {
  const states = await prisma.property.findMany({
    select: { state: true },
    distinct: "state",
    orderBy: { state: "asc" },
  });
  return Response.json(states);
}
