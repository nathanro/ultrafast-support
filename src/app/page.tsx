import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WordPressCare from "@/components/WordPressCare";
import AIServices from "@/components/AIServices";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <WordPressCare />
      <AIServices />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
