'use client'

import About from "@/components/About/Index";
import Banner from "@/components/Banner/Index";
import ProgramBelajarin from "@/components/ProgramBelajarin/Index";
import StatisCount from "@/components/StatistCount/Index";
import Testimoni from "@/components/Testimoni/Index";
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
    <div className="bg-primary">
      <NavbarLandingPage />
      <Banner />
      <StatisCount />
      <About />
      <Testimoni />
      <ProgramBelajarin />
      <Footer />
    </div>
  );
}
