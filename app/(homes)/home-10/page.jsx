import Footer10 from "@/components/footers/Footer10";
import Header10 from "@/components/headers/Header10";
import About from "@/components/homes/home-10/About";
import Blogs from "@/components/homes/home-10/Blogs";
import Facts from "@/components/homes/home-10/Facts";
import Features from "@/components/homes/home-10/Features";
import Hero from "@/components/homes/home-10/Hero";
import Projects from "@/components/homes/home-10/Projects";
import Team from "@/components/homes/home-10/Team";
import Testimonials from "@/components/homes/home-10/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 10 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper roboto-condensed  ">
        <Header10 />
        <div className="page-content bg-white home-slider-10">
          <Hero />
          <div className="content-block">
            <About />
            <Features />
            <Projects />
            <Facts />
            <Team />
            <Testimonials />
            <Blogs />
          </div>
        </div>
        <Footer10 />
      </div>
    </>
  );
}
