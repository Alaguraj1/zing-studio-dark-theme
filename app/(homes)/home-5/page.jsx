import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import About from "@/components/homes/home-5/About";
import Blogs from "@/components/homes/home-5/Blogs";
import Hero from "@/components/homes/home-5/Hero";
import Projects1 from "@/components/homes/home-5/Projects1";
import Projects2 from "@/components/homes/home-5/Projects2";
import Projects3 from "@/components/homes/home-5/Projects3";
import Services from "@/components/homes/home-5/Services";
import Team from "@/components/homes/home-5/Team";
import Testimonials from "@/components/homes/home-5/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 5 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper roboto-condensed ">
        <Header5 />
        <div className="page-content bg-white home-slider-5">
          <Hero />
          <div className="content-block">
            <About />
            <Projects1 />
            <Projects2 />
            <Projects3 />
            <Services />
            <Team />
            <Testimonials />
            <Blogs />
          </div>
        </div>
        <Footer5 />
      </div>
    </>
  );
}
