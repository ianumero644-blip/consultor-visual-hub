import Hero from "@/components/Hero";
import PackageDescription from "@/components/PackageDescription";
import DeliveryDetails from "@/components/DeliveryDetails";
import Timeline from "@/components/Timeline";
import Organization from "@/components/Organization";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PackageDescription />
      <DeliveryDetails />
      <Timeline />
      <Organization />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
