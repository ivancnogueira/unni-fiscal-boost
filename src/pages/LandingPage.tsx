import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Biography from "@/components/Biography";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const LandingPage = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Unni Contabilidade - Reduza até 30% dos seus Impostos Legalmente";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Especialistas em redução fiscal e recuperação de créditos tributários. Mais de 400 empresas atendidas e R$ 50M+ recuperados. Análise gratuita em 24h."
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Unni Contabilidade",
      "url": window.location.origin,
      "logo": `${window.location.origin}/favicon.ico`,
      "description": "Especialistas em redução fiscal e recuperação de créditos tributários para empresas do Lucro Real",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-99999-9999",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      },
      "founder": {
        "@type": "Person",
        "name": "Carlos Murilo"
      },
      "areaServed": "BR",
      "serviceType": ["Consultoria Tributária", "Recuperação de Créditos", "Planejamento Fiscal"]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Clean up structured data on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <CredibilityBar />
        <WhyChooseUs />
        <Biography />
        <ContactForm />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;