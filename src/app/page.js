'use client'

import About from "@/components/About/Index";
import BannerCarousel from "@/components/BannerCarousel/Index";
import StatisCount from "@/components/StatistCount/Index";
import Testimonicarousel from "@/components/TestimoniCarousel/Index";
import Footer from "@/components/utils/Footer/Index";
import NavbarLandingPage from "@/components/utils/Navbar/landingPage";
import { useRouter } from "next/navigation";
import { React, useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('accessToken')
    const uid = localStorage.getItem('uid')
    if (isLoggedIn) {
      router.push(`/member/${uid}`);
    }
  }, []);


  return (
    <div className="bg-home">
      <NavbarLandingPage />
      <div className="p-4 md:px-36">
        <BannerCarousel />
        <StatisCount />
        <About />
        <Testimonicarousel />
      </div>
      <Footer />
    </div>
  );
}
