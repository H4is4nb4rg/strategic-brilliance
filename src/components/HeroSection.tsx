import { motion } from "framer-motion";
import heroBg from "@/assets/hero-corporate.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="M&R Consultoria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(210 33% 11% / 0.6) 0%, hsl(210 33% 11% / 0.95) 100%)",
          }}
        />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-40" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="gold-line-center mb-8" />
          <p className="font-sans-body text-primary tracking-[0.3em] uppercase text-sm mb-6 font-medium">
            M&R Consultoria e Soluções
          </p>
        </motion.div>

        <motion.h1
          className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          Quem Somos
        </motion.h1>

        <motion.p
          className="font-serif-display text-xl md:text-2xl text-primary italic mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Inteligência estratégica aplicada à segurança empresarial.
        </motion.p>

        <motion.p
          className="font-sans-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          A M&R Consultoria e Soluções é especializada em projetos e estratégias
          de segurança patrimonial, eletrônica e prevenção de perdas. Atuamos com
          foco em eficiência operacional, redução de riscos e otimização de
          recursos.
        </motion.p>

        <motion.div
          className="gold-line-center mt-12"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
