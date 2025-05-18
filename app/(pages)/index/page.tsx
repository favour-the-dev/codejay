import Hero from "@/app/components/index/hero";
import About from "@/app/components/index/about";
import Rates from "@/app/components/index/rates";
function HomePage() {
  return (
    <>
      <section className="w-full h-full">
        <Hero />
        <About />
        <Rates />
      </section>
    </>
  );
}

export default HomePage;
