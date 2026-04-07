import { motion } from "framer-motion";
import { Globe, TrendingUp, Users, Scale } from "lucide-react";

const MissionSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  return (
    <section id="mission" className="py-24 md:py-32 bg-charter-gradient relative">
      <div className="absolute inset-0 star-pattern opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-patriot-gold text-sm mb-4 font-medium">Our Mission</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Prediction Markets<br />
            <span className="text-gradient-gold">Matter for Humanity</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Prediction markets represent one of humanity's most powerful tools for aggregating 
            collective wisdom. They transform opinion into actionable probability — enabling 
            societies to make better decisions about the future.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            The <span className="text-patriot-gold font-semibold">@realDonaldTrump</span> handle on 
            Manifold Markets carries immense symbolic weight. Its responsible stewardship ensures 
            that markets tied to one of the most consequential figures in modern history remain 
            credible, fair, and free from manipulation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Scale, title: "Market Integrity", desc: "Ensuring prediction markets remain trustworthy instruments of collective intelligence." },
            { icon: Users, title: "Public Trust", desc: "Preventing impersonation and fraud that would undermine confidence in forecasting platforms." },
            { icon: TrendingUp, title: "Better Forecasting", desc: "Advancing humanity's ability to predict and prepare for the future through accurate markets." },
            { icon: Globe, title: "Global Good", desc: "Serving the worldwide community of forecasters, researchers, and decision-makers." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-patriot-gold/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
