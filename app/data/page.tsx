import prisma from "@/prisma/db/db";

import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";

interface HomeProps {
  searchParams: {
    state?: string;
    city?: string;
    modality?: string;
    orderBy?: "asc" | "desc";
  };
}

export default async function Home({ searchParams }: HomeProps) {
  console.log(searchParams);
  const { orderBy, ...filters } = searchParams;
  let properties = [];
  if (!searchParams) {
    properties = await prisma.property.findMany({
      take: 50,
      where: {
        active: true,
      },
      orderBy: {
        discount: "desc",
      },
    });
  } else {
    properties = await prisma.property.findMany({
      take: 50,
      where: { ...filters, active: true },
      orderBy: [
        {
          price: orderBy,
        },
        {
          discount: "desc",
        },
      ],
    });
  }

  return (
    <>
      <Navbar />
      <main className="p-8">
        <section className="flex flex-col items-center gap-4 ">
          <PropertyList properties={properties} />
        </section>
      </main>
    </>
  );
}
