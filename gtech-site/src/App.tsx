import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import AISection from "@/components/AISection";
import BPOSection from "@/components/BPOSection";
import ClientAreaSection from "@/components/ClientAreaSection";
import ClientPortalDashboard from "@/components/ClientPortalDashboard";
import CasesSection from "@/components/CasesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        const logged = localStorage.getItem("gtech_client_logged");
        setIsClient(logged === "1" || window.location.hash === "#portal");
      } catch (e) {
        setIsClient(window.location.hash === "#portal");
      }
    };

    check();
    const onHash = () => check();
    const onStorage = (e: StorageEvent) => {
      if (e.key === "gtech_client_logged") check();
    };

    window.addEventListener("hashchange", onHash);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <div className="bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesGrid />
        <AISection />
        <BPOSection />
        {isClient ? <ClientPortalDashboard /> : <ClientAreaSection />}
        <CasesSection />
        <BlogSection />
        <ContactSection />
        <Footer />
        <WhatsAppFloat />
      </main>
    </div>
  );
}
