import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import teamImg from "@/assets/team-institutional.jpg";

const EssenceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="gold-line mb-6" />
            <p className="font-sans-body text-primary tracking-[0.25em] uppercase text-xs mb-4 font-semibold">
              Nossa Essência
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Proteção que nasce da{" "}
              <span className="text-gold-gradient">inteligência</span>
            </h2>
            <p className="font-sans-body text-muted-foreground text-lg leading-relaxed mb-6">
              A M&R é especializada em consultoria e projetos de segurança de
              qualquer porte. Acreditamos que a verdadeira proteção nasce da
              união entre tecnologia de ponta e capital humano preparado.
            </p>
            <p className="font-sans-body text-muted-foreground text-lg leading-relaxed">
              Oferecemos serviços acessíveis e personalizados, focados na
              realidade de cada cliente, garantindo soluções que realmente
              funcionam e geram resultados mensuráveis.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={teamImg}
                alt="Equipe M&R Consultoria"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
