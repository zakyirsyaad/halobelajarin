'use client'

import BannerCarousel from "@/components/BannerCarousel/Index";
import PopularCard from "@/components/CardClass/PopularCard/Index";
import Testimonicarousel from "@/components/TestimoniCarousel/Index";
import Category from "@/components/utils/Category/Index";
import Footer from "@/components/utils/Footer/Index";
import Navbar from "@/components/utils/Navbar/Index";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  // const auth = useSelector(state => state.auth);
  // const router = useRouter();

  // useEffect(() => {
  //   const uid = localStorage.getItem('uid');
  //   // Pemeriksaan status login
  //   if (auth.accessToken && uid) {
  //     // Jika sudah login dan uid ada, arahkan ke halaman utama
  //     router.push(`/member/${uid}`);
  //   }
  // }, [auth]); // Run the effect when isLoggedIn changes

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
