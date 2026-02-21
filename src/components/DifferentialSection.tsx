import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TrendingUp, DollarSign, ShieldAlert, Users, Heart } from "lucide-react";

const differentials = [
  { icon: TrendingUp, text: "Foco em ROI da segurança" },
  { icon: DollarSign, text: "Redução de custos estruturais" },
  { icon: ShieldAlert, text: "Mitigação de riscos operacionais" },
  { icon: Users, text: "Gestão integrada entre segurança e pessoas" },
  { icon: Heart, text: "Cultura organizacional preventiva" },
];

const DifferentialSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-28 md:py-36 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(210 33% 8%) 0%, hsl(212 40% 14%) 50%, hsl(210 33% 8%) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="gold-line-center mb-6" />
          <p className="font-sans-body text-primary tracking-[0.25em] uppercase text-xs mb-4 font-semibold">
            Por que nos escolher
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Diferencial{" "}
            <span className="text-gold-gradient">Competitivo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group text-center p-8 rounded-lg border border-border/50 hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-sans-body text-foreground text-sm font-medium leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
