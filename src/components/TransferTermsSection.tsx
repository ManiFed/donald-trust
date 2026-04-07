import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const TransferTermsSection = () => {
  const permitted = [
    "Use of the handle to participate in prediction markets in a neutral, non-partisan manner",
    "Posting forecasts, analyses, and commentary that serve the public interest",
    "Engaging with the Manifold Markets community to promote prediction market literacy",
    "Collaborating with researchers and academics studying forecasting accuracy",
  ];

  const prohibited = [
    "Impersonation of Donald J. Trump or any other individual",
    "Market manipulation, wash trading, or coordinated distortion of outcomes",
    "Political campaigning, endorsement, or partisan advocacy of any kind",
    "Sale, lease, or monetization of the handle for private financial gain",
  ];

  const transferConditions = [
    { condition: "Verified Request from Donald J. Trump", detail: "Upon formal identity verification and written request, subject to Board supermajority approval." },
    { condition: "Successor Nonprofit Organization", detail: "Transfer to an organization with substantially similar mission, upon dissolution of the Trust." },
    { condition: "Platform Safekeeping", detail: "Transfer to Manifold Markets itself if the Trust can no longer fulfill its duties." },
    { condition: "Binding Ethical Terms", detail: "Any transfer must include binding covenants ensuring continued responsible stewardship." },
  ];

  return (
    <section id="terms" className="py-24 md:py-32 bg-navy-gradient relative">
      <div className="absolute inset-0 star-pattern opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-patriot-gold text-sm mb-4 font-medium">Terms & Conditions</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Handle Usage &<br />
            <span className="text-gradient-gold">Transfer Terms</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Permitted Uses
            </h3>
            <ul className="space-y-4">
              {permitted.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-primary" />
              Prohibited Uses
            </h3>
            <ul className="space-y-4">
              {prohibited.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Transfer Conditions</h3>
          <div className="space-y-4">
            {transferConditions.map((item, i) => (
              <motion.div
                key={item.condition}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="bg-card border border-border rounded-lg p-6 flex items-start gap-4"
              >
                <ArrowRight className="w-5 h-5 text-patriot-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">{item.condition}</h4>
                  <p className="text-muted-foreground text-sm">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransferTermsSection;
