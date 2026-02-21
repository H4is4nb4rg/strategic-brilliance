import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Search, Shield, Target, Rocket, BarChart3 } from "lucide-react";

const approaches = [
  {
    icon: Search,
    title: "Diagnóstico técnico aprofundado",
    description: "Análise detalhada do cenário atual para identificar pontos críticos e oportunidades de melhoria.",
  },
  {
    icon: Shield,
    title: "Análise de vulnerabilidades",
    description: "Mapeamento completo das fragilidades operacionais, tecnológicas e humanas da organização.",
  },
  {
    icon: Target,
    title: "Planejamento estratégico",
    description: "Criação de planos de ação alinhados aos objetivos do negócio com metas claras e mensuráveis.",
  },
  {
    icon: Rocket,
    title: "Implementação orientada a resultados",
    description: "Execução com acompanhamento constante para garantir a entrega de valor em cada etapa.",
  },
  {
    icon: BarChart3,
    title: "Monitoramento e melhoria contínua",
    description: "Acompanhamento permanente com indicadores de performance e ajustes estratégicos periódicos.",
  },
];

const ApproachSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="gold-line-center mb-6" />
          <p className="font-sans-body text-primary tracking-[0.25em] uppercase text-xs mb-4 font-semibold">
            Metodologia
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa Abordagem{" "}
            <span className="text-gold-gradient">Estratégica</span>
          </h2>
          <p className="font-sans-body text-muted-foreground text-lg">
            Uma metodologia testada e comprovada que transforma desafios de
            segurança em vantagens competitivas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="font-sans-body text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
