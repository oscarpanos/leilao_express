import Navbar from "./components/Navbar";
import PropertyList from "./components/PropertyList";

export default async function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <PropertyList />
        </section>
      </main>
    </>
  );
}
