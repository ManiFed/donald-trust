import { motion } from "framer-motion";
import { Shield, Eye, Handshake, Lightbulb } from "lucide-react";

const goals = [
  {
    icon: Shield,
    title: "Preserve Market Integrity",
    desc: "Ensure that prediction markets associated with the @realDonaldTrump handle maintain the highest standards of accuracy, fairness, and credibility.",
    number: "01",
  },
  {
    icon: Eye,
    title: "Prevent Impersonation & Fraud",
    desc: "Guard against any misuse of the handle that could mislead market participants, distort forecasting outcomes, or damage public confidence.",
    number: "02",
  },
  {
    icon: Handshake,
    title: "Ensure Responsible Stewardship",
    desc: "Provide a transparent governance framework that holds the Trust accountable to the global prediction markets community.",
    number: "03",
  },
  {
    icon: Lightbulb,
    title: "Advance Humanity Through Forecasting",
    desc: "Promote the use of prediction markets as a tool for better collective decision-making, policy evaluation, and understanding of world events.",
    number: "04",
  },
];

const GoalsSection = () => {
  return (
    <section id="goals" className="py-24 md:py-32 bg-charter-gradient relative">
      <div className="absolute inset-0 star-pattern opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-patriot-gold text-sm mb-4 font-medium">Strategic Objectives</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-gold">Goals</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-card border border-border rounded-lg p-8 relative overflow-hidden group hover:border-patriot-gold/30 transition-colors"
            >
              <span className="absolute top-4 right-6 text-6xl font-black text-foreground/5 font-serif">
                {goal.number}
              </span>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <goal.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{goal.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
