import Hero from "@/app/components/index/hero";
import About from "@/app/components/index/about";
import Rates from "@/app/components/index/rates";
import Testimonials from "@/app/components/index/testimonials";
import Transactions from "@/app/components/index/transactions";
import VideoGallery from "@/app/components/index/gallery";
import FAQ from "@/app/components/index/faq";
import News from "@/app/components/index/news";
function HomePage() {
  return (
    <>
      <section className="w-full h-full">
        <Hero />
        <About />
        <Rates />
        <Testimonials />
        <Transactions />
        <VideoGallery />
        <FAQ />
        <News />
      </section>
    </>
  );
}

export default HomePage;
