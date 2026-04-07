import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import CharterSection from "@/components/CharterSection";
import GoalsSection from "@/components/GoalsSection";
import TransferTermsSection from "@/components/TransferTermsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <CharterSection />
      <GoalsSection />
      <TransferTermsSection />
      <Footer />
    </div>
  );
};

export default Index;
