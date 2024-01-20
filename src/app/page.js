import BannerCarousel from "@/components/BannerCarousel/Index";
import PopularCard from "@/components/CardClass/PopularCard/Index";
import Testimonicarousel from "@/components/TestimoniCarousel/Index";
import Category from "@/components/utils/Category/Index";
import Footer from "@/components/utils/Footer/Index";
import Navbar from "@/components/utils/Navbar/Index";

export default function Home() {
  return (
    <div className="bg-home">
      <Navbar />
      <Category />
      <div className="p-4 md:px-36 md:py-24">
        <BannerCarousel />
        <PopularCard />
        <Testimonicarousel />
      </div>
      <Footer />
    </div>
  );
}
