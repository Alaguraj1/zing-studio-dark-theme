import Footer9 from "@/components/footers/Footer9";
import Header18 from "@/components/headers/Header18";
import Hero from "@/components/homes/home-19/Hero";
import Blog from "@/components/homes/home-9/Blog";
import Cta from "@/components/homes/home-9/Cta";
import Projects from "@/components/homes/home-9/Projects";
import Service2 from "@/components/homes/home-9/Service2";
import Services from "@/components/homes/home-9/Services";
import Team from "@/components/homes/home-9/Team";
import Testimonials from "@/components/homes/home-9/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 19 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper ">
        <Header18 />
        <div className="page-content bg-white">
          <Hero />
          <div className="content-block">
            <Services />
            <Projects />
            <Service2 />
            <Testimonials />
            <Team />
            <Cta />
            <Blog />
          </div>
        </div>
        <Footer9 />
      </div>
    </>
  );
}
