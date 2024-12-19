import Footer12 from "@/components/footers/Footer12";
import Header12 from "@/components/headers/Header12";
import About from "@/components/homes/home-12/About";
import Blogs from "@/components/homes/home-12/Blogs";
import Hero from "@/components/homes/home-12/Hero";
import Portfolio from "@/components/homes/home-12/Portfolio";
import Servies from "@/components/homes/home-12/Servies";
import Team from "@/components/homes/home-12/Team";
import Testimonials from "@/components/homes/home-12/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 12 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <div className="page-wraper roboto-condensed  ">
      <Header12 />
      <Hero />
      <div className="page-content bg-white">
        <div className="content-block">
          <About />
          <Servies />
          <Portfolio />
          <Team />
          <Blogs />
          <Testimonials />
        </div>
      </div>
      <Footer12 />
    </div>
  );
}
