import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import About from "@/components/homes/home-7/About";
import Blogs from "@/components/homes/home-7/Blogs";
import Cta from "@/components/homes/home-7/Cta";
import FoodItem from "@/components/homes/home-7/FoodItem";
import Hero from "@/components/homes/home-7/Hero";
import ProjectGallery from "@/components/homes/home-7/ProjectGallery";
import Projects from "@/components/homes/home-7/Projects";
import Team from "@/components/homes/home-7/Team";
import Testimonials from "@/components/homes/home-7/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 7 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper ">
        <Header7 />
        <div className="page-content bg-white home-slider-7">
          <Hero />
          <div className="content-block">
            <Cta />
            <About />
            <ProjectGallery />
            <Projects />
            <FoodItem />
            <Team />
            <Testimonials />
            <Blogs />
          </div>
        </div>
        <Footer7 />
      </div>
    </>
  );
}
