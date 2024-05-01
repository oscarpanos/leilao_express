import Navbar from "./components/Navbar";
import PropertyList from "./components/PropertyList";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="flex flex-col gap-4">
          <PropertyList />
        </section>
      </main>
    </>
  );
}
