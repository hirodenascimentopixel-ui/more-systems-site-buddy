import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Quote from "@/components/Quote";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Quote />
    </main>
  );
};

export default Index;
