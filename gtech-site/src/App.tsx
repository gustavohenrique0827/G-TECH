import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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

function HomeShell({ isClient }: { isClient: boolean }) {
  const location = useLocation();
  const isPortalRoute = location.pathname === "/portal";
  const hideMarketingWhenPortal = isPortalRoute;

  useEffect(() => {
    // Quando entrar em uma rota “posterior” (ex: /blog), manter a home completa
    // e rolar até a seção correspondente.
    const sectionId =
      location.pathname === "/"
        ? null
        : location.pathname === "/blog"
          ? "blog"
          : location.pathname === "/contato"
            ? "contato"
            : location.pathname === "/cases"
              ? "cases"
              : location.pathname === "/solucoes"
                ? "solucoes"
                : location.pathname === "/ia"
                  ? "ia"
                  : location.pathname === "/bpo"
                    ? "bpo"
                    : location.pathname === "/area-cliente" || location.pathname === "/cliente"
                      ? "area-cliente"
                      : location.pathname === "/portal"
                        ? "portal"
                        : null;

    if (!sectionId) return;

    const el = document.getElementById(sectionId);
    if (!el) return;

    // offset simples do header fixo (aprox. 64px)
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="bg-bg text-ink">
      {!hideMarketingWhenPortal && <Navbar />}
      <main>
        {hideMarketingWhenPortal ? (
          <div>
            {/* Portal-only page */}
            <ClientPortalDashboard />
          </div>
        ) : (
          <>
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
          </>
        )}
      </main>
    </div>
  );
}

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
    <Routes>
      <Route path="/" element={<HomeShell isClient={isClient} />} />
      <Route path="/blog" element={<HomeShell isClient={isClient} />} />
      <Route path="/contato" element={<HomeShell isClient={isClient} />} />
      <Route path="/cases" element={<HomeShell isClient={isClient} />} />
      <Route path="/solucoes" element={<HomeShell isClient={isClient} />} />
      <Route path="/ia" element={<HomeShell isClient={isClient} />} />
      <Route path="/bpo" element={<HomeShell isClient={isClient} />} />
      <Route path="/area-cliente" element={<HomeShell isClient={isClient} />} />
      <Route path="/cliente" element={<HomeShell isClient={isClient} />} />
      <Route path="/portal" element={<HomeShell isClient={isClient} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

