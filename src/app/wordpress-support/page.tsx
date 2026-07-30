import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GHLChatWidget from "@/components/GHLChatWidget";
import WPContent from "@/components/wordpress/WPContent";

export const metadata = {
  title: "WordPress Care Plans - UltraFast Support",
  description: "Professional WordPress maintenance, security, backups, and performance optimization. Keep your site running perfectly.",
};

export default function WordPressSupportPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "UltraFast WordPress Support & Care",
    "description": "Professional 24/7 WordPress speed optimization, offsite backups, cloud security hardening, and Core Web Vitals optimization.",
    "url": "https://ultrafast.support/wordpress-support",
    "telephone": "+1-800-555-0199",
    "priceRange": "$49 - $249",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WordPress Care Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Essential Plan",
            "description": "Daily backups, core/plugin updates, and basic security."
          },
          "price": "49.00",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Plan",
            "description": "Hourly backups, priority support, and advanced speed optimization."
          },
          "price": "99.00",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Plan",
            "description": "Custom development, real-time security, and dedicated account manager."
          },
          "price": "249.00",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <WPContent />
      <Footer />
      <GHLChatWidget />
    </main>
  );
}
