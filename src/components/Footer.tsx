import { Star, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Shield className="w-10 h-10 text-patriot-gold" strokeWidth={1.2} />
              <Star className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-primary" fill="currentColor" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">The Donald Trust</h3>
          <p className="text-muted-foreground text-sm mb-6">Established 2025 · A Nonprofit for Humanity</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
          <a href="#mission" className="text-muted-foreground hover:text-patriot-gold transition-colors">Mission</a>
          <a href="#charter" className="text-muted-foreground hover:text-patriot-gold transition-colors">Charter</a>
          <a href="#goals" className="text-muted-foreground hover:text-patriot-gold transition-colors">Goals</a>
          <a href="#terms" className="text-muted-foreground hover:text-patriot-gold transition-colors">Transfer Terms</a>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-10">
          <blockquote className="text-muted-foreground italic text-lg leading-relaxed">
            "The measure of a civilization is not what it builds, but what it chooses to protect."
          </blockquote>
        </div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <Star className="w-3 h-3 text-patriot-gold" fill="currentColor" />
          <div className="w-16 h-px bg-border" />
          <Star className="w-3 h-3 text-patriot-gold" fill="currentColor" />
          <div className="w-16 h-px bg-border" />
          <Star className="w-3 h-3 text-patriot-gold" fill="currentColor" />
        </div>

        <p className="text-center text-muted-foreground text-xs">
          © 2025 The Donald Trust. All rights reserved. This website does not represent, endorse, or claim affiliation 
          with Donald J. Trump or any political organization.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
