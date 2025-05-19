import Hero from "@/app/components/index/hero";
import About from "@/app/components/index/about";
import Rates from "@/app/components/index/rates";
import Testimonials from "@/app/components/index/testimonials";
import Transactions from "@/app/components/index/transactions";
function HomePage() {
  return (
    <>
      <section className="w-full h-full">
        <Hero />
        <About />
        <Rates />
        <Testimonials />
        <Transactions />
      </section>
    </>
  );
}

export default HomePage;
