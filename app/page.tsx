import { CTABand } from "../components/CTABand";
import { ContactForm } from "../components/ContactForm";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { NavBar } from "../components/NavBar";
import { ProblemSolution } from "../components/ProblemSolution";
import { TrustIndicators } from "../components/TrustIndicators";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <TrustIndicators />
        <CTABand />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

