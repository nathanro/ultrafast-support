import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GHLChatWidget from "@/components/GHLChatWidget";
import ITContent from "@/components/it/ITContent";

export const metadata = {
  title: "IT & AI Services - UltraFast Support",
  description: "Custom development, AI automation, VPS management, and intelligent solutions for your business.",
};

export default function ITSupportPage() {
  const aiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "UltraFast IT & AI Automation Services",
    "description": "Enterprise AI agent deployment, custom API integrations, GHL pipelines, and VPS server management.",
    "url": "https://ultrafast.support/it-support",
    "telephone": "+1-800-555-0199",
    "priceRange": "Custom Pricing / Contract",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Artificial Intelligence Agents",
      "Process Automation",
      "API Integrations",
      "Server Orchestration",
      "GoHighLevel Automation",
      "Stripe Payments"
    ]
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiServiceSchema) }}
      />
      <Navbar />
      <ITContent />
      <Footer />
      <GHLChatWidget />
    </main>
  );
}
