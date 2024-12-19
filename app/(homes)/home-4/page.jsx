import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import About from "@/components/homes/home-4/About";
import Blogs from "@/components/homes/home-4/Blogs";
import Clients from "@/components/homes/home-4/Clients";
import Cta from "@/components/homes/home-4/Cta";
import Projects from "@/components/homes/home-4/Projects";
import Services from "@/components/homes/home-4/Services";
import Team from "@/components/homes/home-4/Team";
import Testimonials from "@/components/common/Testimonials";
import React from "react";
import Hero from "@/components/homes/home-4/Hero";

export const metadata = {
  title: "Home 4 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper ">
        <Header4 />
        <div className="page-content bg-white">
          <Hero />
          <div className="content-block">
            <Cta />
            <About />
            <Services />
            <Projects />
            <Team />
            <Testimonials />
            <Blogs />
            <Clients />
          </div>
        </div>
        <Footer4 />
      </div>
    </>
  );
}
