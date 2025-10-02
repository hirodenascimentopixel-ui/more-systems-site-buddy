import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Quote />
      <Footer />
    </main>
  );
};

export default Index;
