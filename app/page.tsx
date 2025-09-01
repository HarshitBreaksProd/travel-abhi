import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TopDestinations from "@/components/TopDestinations";
import BookingSteps from "@/components/BookingSteps";
import CommunitySpotlight from "@/components/CommunitySpotlight";
import WhyTravlAbhi from "@/components/WhyTravlAbhi";
import OrganizerCTA from "@/components/OrganizerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TopDestinations />
      <BookingSteps />
      <CommunitySpotlight />
      <WhyTravlAbhi />
      <OrganizerCTA />
      <Footer />
    </main>
  );
}
