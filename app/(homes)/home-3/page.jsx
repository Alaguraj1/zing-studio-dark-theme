import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import About from "@/components/homes/home-3/About";
import Blogs from "@/components/homes/home-3/Blogs";
import Cta from "@/components/homes/home-3/Cta";
import Cta2 from "@/components/homes/home-3/Cta2";
import Features from "@/components/homes/home-3/Features";
import Projects from "@/components/homes/home-3/Projects";
import Team from "@/components/homes/home-3/Team";
import Testimonials from "@/components/common/Testimonials2";
import React from "react";
import Hero from "@/components/homes/home-3/Hero";

export const metadata = {
  title: "Home 3 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper ">
        <Header3 />
        <div className="page-content bg-white">
          <Hero />
          <div className="content-block">
            <Features />
            <div
              className="section-full content-inner-2 bg-primary wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              style={{ backgroundImage: "url(/images/background/map-bg.png)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center service-info">
                    <h2 className="title text-white">
                      Amazing things happen to your business when we connect
                      those dots of utility and value.
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <About />
            <Cta />
            <Projects />
            <Team />
            <Testimonials /> <Blogs />
            <Cta2 />
          </div>
        </div>
        <Footer3 />
      </div>
    </>
  );
}
