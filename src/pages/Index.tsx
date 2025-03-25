
import { TransitionProvider } from "@/components/TransitionProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <TransitionProvider>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </TransitionProvider>
  );
};

export default Index;
