import prisma from "@/prisma/db/db";

export async function handler() {
  const states = await prisma.property.findMany({
    select: { state: true },
    distinct: ["state"],
  });

  return Response.json(states);
}

export { handler as GET };
