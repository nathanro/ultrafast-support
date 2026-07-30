import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GHLChatWidget from "@/components/GHLChatWidget";
import WPContent from "@/components/wordpress/WPContent";

export const metadata = {
  title: "WordPress Care Plans - UltraFast Support",
  description: "Professional WordPress maintenance, security, backups, and performance optimization. Keep your site running perfectly.",
};

export default function WordPressSupportPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <WPContent />
      <Footer />
      <GHLChatWidget />
    </main>
  );
}
