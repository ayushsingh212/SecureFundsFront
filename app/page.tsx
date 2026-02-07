import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComplianceSection from "@/components/ComplianceSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import LoanExplorer from "@/components/LoanExplorer";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <ComplianceSection />
        <LoanExplorer/>
        <ServicesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
