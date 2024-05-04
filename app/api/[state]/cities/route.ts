import prisma from "@/prisma/db/db";

interface ParamsProps {
  params: {
    state: string;
  };
}
export async function handler(req: Request, { params }: ParamsProps) {
  const state = params.state;
  const cities = await prisma.property.findMany({
    select: { city: true },
    distinct: "city",
    where: { state: { equals: state, mode: "insensitive" } },
    orderBy: { city: "asc" },
  });
  return Response.json(cities);
}

export { handler as GET };
