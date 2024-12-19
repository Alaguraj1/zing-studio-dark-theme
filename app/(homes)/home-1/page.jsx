import ClientSlider from "@/components/common/ClientSlider";
import Footer2 from "@/components/footers/Footer2";
import Header17 from "@/components/headers/Header17";
import Cta from "@/components/homes/home-13/Cta";
import Testimonials from "@/components/homes/home-10/Testimonials";
import Portfolio from "@/components/homes/home-12/Portfolio";
import Blog1 from "@/components/homes/home-15/Blog1";
import Service from "@/components/homes/home-2/Service";
import Projects2 from "@/components/homes/home-5/Projects2";
import HomeServiceAnimation from "@/components/service/HomeServiceAnimation";
import HomeService from "@/components/service/HomeServices";
import React from "react";
import Testimonial from "@/components/homes/home-5/Testimonials";
import Hero from "@/components/homes/home-7/Hero";
import Footer13 from "@/components/footers/Footer13";

export const metadata = {
  title: "Home || Zing Studio",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
          <Hero />
          <div
            className="content-block p-t50 p-b50 "
            style={{ backgroundColor: "#1e1e1e", backgroundImage:"url(/images/bg1.png)", backgroundRepeat:"no-repeat" }}
          >
            <ClientSlider />
          </div>

          <div
            className="content-block p-b50 "
            style={{
              backgroundColor: "#1a1a1a",
              backgroundImage: "url(/images/element-1.png)",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Testimonials />
          </div>

          <Testimonial />

          {/* <div className="content-block p-b50">
            <Cta />
          </div> */}

          <Projects2 />

          {/* <div className="content-block">
            <HomeService />
          </div> */}
        </div>

        <div
          className="content-block"
          style={{
            backgroundColor: "#1a1a1a",
            backgroundImage: "url(/images/element-4.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
           //top:"-60px",
          }}
        >
            <HomeServiceAnimation />
         
        </div>
        <Cta />
        <Footer13 />
        {/* <Footer2 contactSection="false" /> */}
      </div>
    </>
  );
}
