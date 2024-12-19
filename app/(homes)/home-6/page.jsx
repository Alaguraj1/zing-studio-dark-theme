import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Blogs from "@/components/homes/home-3/Blogs";

import About from "@/components/homes/home-6/About";
import Cta from "@/components/homes/home-6/Cta";
import Hero from "@/components/homes/home-6/Hero";
import Projects from "@/components/homes/home-6/Projects";
import Services from "@/components/homes/home-6/Services";
import Services2 from "@/components/homes/home-6/Services2";
import Team from "@/components/homes/home-6/Team";
import Testimonials from "@/components/homes/home-6/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 6 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper ">
        <Hero />
        <Header6 />
        <div className="page-content bg-white">
          <div className="content-block">
            <About />
            <Cta />
            <Services />
            <Team />
            <Services2 />
            <Projects />
            <Testimonials />
            <Blogs />
          </div>
        </div>
        <Footer6 />
      </div>
    </>
  );
}
