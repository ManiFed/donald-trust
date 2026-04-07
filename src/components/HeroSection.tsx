import { motion } from "framer-motion";
import { Shield, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-gradient star-pattern">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10">
          <Star className="w-8 h-8 text-patriot-gold" fill="currentColor" />
        </div>
        <div className="absolute top-40 right-20 opacity-10">
          <Star className="w-6 h-6 text-patriot-gold" fill="currentColor" />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-10">
          <Star className="w-10 h-10 text-patriot-gold" fill="currentColor" />
        </div>
        <div className="absolute top-1/3 right-1/3 opacity-5">
          <Star className="w-16 h-16 text-patriot-gold" fill="currentColor" />
        </div>
        {/* Red stripe accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Shield className="w-24 h-24 md:w-32 md:h-32 text-patriot-gold" strokeWidth={1.2} />
            <Star className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 text-primary" fill="currentColor" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.3em] text-patriot-gold text-sm md:text-base mb-6 font-medium"
        >
          A Nonprofit for Humanity
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          <span className="text-foreground">Protecting Truth in</span>
          <br />
          <span className="text-gradient-gold">Prediction Markets</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          The Donald Trust is a nonprofit organization dedicated to the responsible stewardship 
          of the <span className="text-patriot-gold font-semibold">@realDonaldTrump</span> username 
          on Manifold Markets — safeguarding prediction market integrity for the benefit of all humanity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#charter"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-lg"
          >
            Read Our Charter
          </a>
          <a
            href="#mission"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-patriot-gold/30 text-patriot-gold font-semibold rounded-md hover:bg-patriot-gold/10 transition-colors text-lg"
          >
            Our Mission
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
