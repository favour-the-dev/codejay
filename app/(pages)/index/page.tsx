import Hero from "@/app/components/index/hero";
import About from "@/app/components/index/about";
function HomePage() {
  return (
    <>
      <section className="w-full h-full">
        <Hero />
        <About />
      </section>
    </>
  );
}

export default HomePage;
