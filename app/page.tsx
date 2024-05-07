import prisma from "@/prisma/db/db";

import Navbar from "./components/Navbar";
import PropertyList from "./components/PropertyList";
import PropertyFilter from "./components/PropertyFilter";

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
  const { orderBy, ...whereParams } = searchParams;
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
      where: { ...whereParams, active: true },
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
      <header>
        <Navbar />
      </header>
      <main className="p-8">
        <section className="flex flex-col items-center gap-4">
          <PropertyFilter />
          <PropertyList properties={properties} />
        </section>
      </main>
    </>
  );
}
