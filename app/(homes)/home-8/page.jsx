import Footer8 from "@/components/footers/Footer8";
import Header8 from "@/components/headers/Header8";
import About from "@/components/homes/home-8/About";
import Gallery from "@/components/homes/home-8/Gallery";
import Hero from "@/components/homes/home-8/Hero";
import Projects from "@/components/homes/home-8/Projects";
import Services from "@/components/homes/home-8/Services";
import Team from "@/components/homes/home-8/Team";
import Testimonials from "@/components/homes/home-8/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 8 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper frame-box  ">
        <Header8 />
        <div className="page-content">
          <div className="content-block area-frame">
            <div className="container">
              <Hero />
              <About />
              <Projects />
              <Services />
              <Team />
              <Gallery />
              <Testimonials />
            </div>
          </div>
        </div>
        <Footer8 />
      </div>
    </>
  );
}
