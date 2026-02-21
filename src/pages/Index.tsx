import HeroSection from "@/components/HeroSection";
import EssenceSection from "@/components/EssenceSection";
import PhilosophySection from "@/components/PhilosophySection";
import ApproachSection from "@/components/ApproachSection";
import DifferentialSection from "@/components/DifferentialSection";
import ResultsSection from "@/components/ResultsSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <HeroSection />
      <EssenceSection />
      <PhilosophySection />
      <ApproachSection />
      <DifferentialSection />
      <ResultsSection />

      {/* Footer accent */}
      <footer className="py-12 text-center border-t border-border">
        <div className="gold-line-center mb-6" />
        <p className="font-serif-display text-lg text-muted-foreground">
          M&R Consultoria e Soluções
        </p>
        <p className="font-sans-body text-sm text-muted-foreground/60 mt-2">
          Inteligência estratégica aplicada à segurança empresarial
        </p>
      </footer>
    </main>
  );
};

export default Index;
