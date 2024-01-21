import BannerCarousel from "@/components/BannerCarousel/Index";
import PopularCard from "@/components/CardClass/PopularCard/Index";
import Testimonicarousel from "@/components/TestimoniCarousel/Index";
import Category from "@/components/utils/Category/Index";
import Footer from "@/components/utils/Footer/Index";
import Navbar from "@/components/utils/Navbar/Index";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const user = useSelector(state => state.auth.user);

  // const router = useRouter();

  // useEffect(() => {
  //   // Pemeriksaan status login
  //   if (isLoggedIn) {
  //     // Jika sudah login dan uid ada, arahkan ke halaman utama
  //     router.push(`/member/${user.replace(/ /g, '-')}`);
  //   }
  // }, [isLoggedIn]); // Run the effect when isLoggedIn changes

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
