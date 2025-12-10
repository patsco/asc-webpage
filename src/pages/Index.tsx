import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <QuoteSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
