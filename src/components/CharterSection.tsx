import { motion } from "framer-motion";
import { Star } from "lucide-react";

const articles = [
  {
    number: "I",
    title: "Name & Purpose",
    content: `This organization shall be known as "The Donald Trust" (hereinafter "the Trust"). The Trust is established as a nonprofit entity dedicated to the responsible stewardship, protection, and ethical governance of the username @realDonaldTrump on the prediction market platform Manifold Markets. The Trust exists to serve the public interest by ensuring this high-profile handle is used solely for the advancement of prediction market integrity and the betterment of humanity's collective forecasting capacity.`,
  },
  {
    number: "II",
    title: "Mission & Mandate",
    content: `The Trust's mission is to safeguard the @realDonaldTrump handle as a neutral, non-partisan instrument within the prediction markets ecosystem. The Trust shall: (a) maintain the handle in good standing with Manifold Markets; (b) ensure all activity associated with the handle promotes accuracy, transparency, and intellectual honesty; (c) prevent the handle from being co-opted for personal gain, political campaigning, market manipulation, or any activity that would undermine the credibility of prediction markets; and (d) serve as a model for responsible digital identity stewardship in the age of decentralized information.`,
  },
  {
    number: "III",
    title: "Governance",
    content: `The Trust shall be governed by a Board of Trustees consisting of no fewer than three (3) and no more than seven (7) members. Trustees shall be appointed based on demonstrated expertise in prediction markets, digital governance, ethics, or public policy. Decisions regarding the use, management, or disposition of the handle shall require a two-thirds (⅔) supermajority vote of the Board. No single Trustee shall have unilateral authority over the handle. All Board proceedings shall be documented and made available to the public annually.`,
  },
  {
    number: "IV",
    title: "Prohibited Uses",
    content: `The @realDonaldTrump handle shall never be used for: (a) impersonation of any individual, living or deceased; (b) the dissemination of intentionally false or misleading information; (c) market manipulation, insider trading, or any activity that would distort prediction market outcomes; (d) political campaigning, endorsement, or partisan advocacy; (e) commercial advertising or revenue generation for private benefit; or (f) any activity that would bring disrepute to the prediction markets community or violate the terms of service of Manifold Markets.`,
  },
  {
    number: "V",
    title: "Succession & Transfer",
    content: `The handle may be transferred only under the following conditions: (a) To the verified individual Donald J. Trump, upon formal written request and identity verification, subject to Board approval by supermajority vote; (b) To a successor nonprofit organization with a substantially similar mission, upon dissolution of the Trust; (c) To Manifold Markets itself, for safekeeping, should the Trust become unable to fulfill its duties. Any transfer must include binding terms ensuring continued ethical stewardship. The handle shall never be sold, auctioned, or transferred for monetary consideration.`,
  },
];

const CharterSection = () => {
  return (
    <section id="charter" className="py-24 md:py-32 bg-navy-gradient relative">
      <div className="absolute inset-0 star-pattern opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-patriot-gold text-sm mb-4 font-medium">Founding Document</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Charter of<br />
            <span className="text-gradient-gold">The Donald Trust</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-4 h-4 text-patriot-gold" fill="currentColor" />
            <div className="w-24 h-0.5 bg-primary" />
            <Star className="w-4 h-4 text-patriot-gold" fill="currentColor" />
            <div className="w-24 h-0.5 bg-primary" />
            <Star className="w-4 h-4 text-patriot-gold" fill="currentColor" />
          </div>
          <p className="text-muted-foreground italic">Adopted and ratified, Anno Domini 2025</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-card border border-border rounded-lg p-8 hover:border-patriot-gold/20 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-patriot-gold/30 flex items-center justify-center">
                  <span className="text-patriot-gold font-bold text-lg font-serif">{article.number}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Article {article.number}: {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{article.content}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharterSection;
