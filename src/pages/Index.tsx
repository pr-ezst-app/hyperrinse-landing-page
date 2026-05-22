import NavBar from "@/components/NavBar";
import HeroSections from "@/components/HeroSections";
import ReviewsSection from "@/components/ReviewsSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar scrollTo={scrollTo} />
      <HeroSections scrollTo={scrollTo} />
      <ReviewsSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
