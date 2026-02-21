import { motion } from "framer-motion";
import { useScrollReveal, useCountUp } from "@/hooks/use-scroll-reveal";

const metrics = [
  { value: 15, suffix: "+", label: "Anos de Experiência", prefix: "" },
  { value: 250, suffix: "+", label: "Empresas Atendidas", prefix: "" },
  { value: 100, suffix: "%", label: "Foco em Eficiência Estratégica", prefix: "" },
];

const ResultsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.3);

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
            Resultados
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground">
            Resultado que{" "}
            <span className="text-gold-gradient">Entregamos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function MetricCard({
  metric,
  index,
  isVisible,
}: {
  metric: (typeof metrics)[0];
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(metric.value, 2000, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className="text-center group"
    >
      <div className="relative inline-block mb-4">
        <span className="font-serif-display text-6xl md:text-7xl font-bold text-gold-gradient">
          {metric.prefix}
          {count}
          {metric.suffix}
        </span>
      </div>
      <div className="gold-line-center mb-4" />
      <p className="font-sans-body text-muted-foreground text-lg font-medium">
        {metric.label}
      </p>
    </motion.div>
  );
}

export default ResultsSection;
