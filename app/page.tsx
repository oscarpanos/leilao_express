import prisma from "@/prisma/db/db";

import Navbar from "./components/Navbar";
import PropertyList from "./components/PropertyList";
import PropertyFilter from "./components/PropertyFilter";

interface HomeProps {
  searchParams: {
    state?: string;
    city?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  console.log(searchParams);
  let properties = [];
  if (!searchParams) {
    properties = await prisma.property.findMany({
      take: 50,
      orderBy: {
        discount: "desc",
      },
    });
  } else {
    properties = await prisma.property.findMany({
      take: 50,
      where: searchParams,
      orderBy: {
        discount: "desc",
      },
    });
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="flex flex-col items-center gap-4">
          <PropertyFilter />
          <PropertyList properties={properties} />
        </section>
      </main>
    </>
  );
}
