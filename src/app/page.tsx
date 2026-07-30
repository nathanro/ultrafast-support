import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GHLChatWidget from "@/components/GHLChatWidget";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HomeContent />
      <Footer />
      <GHLChatWidget />
    </main>
  );
}
