import HeroSlider from "@/components/home/HeroSlider";
import PropertiesForSale from "@/components/home/PropertiesForSale";
import PropertyServices from "@/components/home/PropertyServices";
import PropertiesForRent from "@/components/home/PropertiesForRent";
import Agents from "@/components/home/Agents";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import LatestNews from "@/components/home/LatestNews";
import FeaturedProperties from "@/components/home/FeaturedProperties";

export default function Home() {
  return (
    <div className="flex flex-col">
       {/* 1. Hero Section */}
       <HeroSlider />
       
       {/* 2. Properties For Sale (Index-14 Style) */}
       <PropertiesForSale />

       {/* 3. Property Services (Dotted Grid + Blueprint BG) */}
       <PropertyServices />

       {/* 4. Properties For Rent (Indigo/Purple Accents) */}
       <PropertiesForRent />

       {/* 5. Meet Our Agents */}
       <Agents />

       {/* 6. Pricing Packages */}
       <Pricing />

       {/* 7. Happy Customers (Testimonials) */}
       <Testimonials />

       {/* 8. Latest News (Blog Section) */}
       <LatestNews />
    </div>
  );
}

