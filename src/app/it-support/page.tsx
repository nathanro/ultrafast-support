import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GHLChatWidget from "@/components/GHLChatWidget";
import ITContent from "@/components/it/ITContent";

export const metadata = {
  title: "IT & AI Services - UltraFast Support",
  description: "Custom development, AI automation, VPS management, and intelligent solutions for your business.",
};

export default function ITSupportPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <ITContent />
      <Footer />
      <GHLChatWidget />
    </main>
  );
}
