import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GraduationCap, FileText, MessageSquare, Settings } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Treinamento e capacitação constante",
    description:
      "Equipes preparadas para lidar com qualquer cenário, desde operações rotineiras até situações críticas.",
  },
  {
    icon: FileText,
    title: "Normas e procedimentos sólidos",
    description:
      "Processos documentados e atualizados que garantem padronização e excelência operacional.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara e objetiva",
    description:
      "Canais de comunicação eficientes que asseguram fluidez na troca de informações estratégicas.",
  },
  {
    icon: Settings,
    title: "Projetos bem dimensionados e funcionais",
    description:
      "Soluções sob medida, projetadas para a realidade específica de cada operação.",
  },
];

const PhilosophySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-28 md:py-36 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Quote */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="gold-line-center mb-6" />
          <p className="font-sans-body text-primary tracking-[0.25em] uppercase text-xs mb-8 font-semibold">
            Nossa Filosofia
          </p>
          <blockquote className="font-serif-display text-2xl md:text-4xl text-foreground italic leading-relaxed">
            "De nada adianta investir em tecnologia se o seu funcionário não está
            treinado para usá-la."
          </blockquote>
          <div className="gold-line-center mt-8" />
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-500 cursor-default"
            >
              {/* Gold top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-lg" />

              <pillar.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="font-sans-body text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
