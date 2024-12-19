import Footer2 from "@/components/footers/Footer2";
import Header19 from "@/components/headers/Header19";
import Service from "@/components/homes/home-2/Service";
import Hero from "@/components/homes/home-20/Hero";
import React from "react";

export const metadata = {
  title: "Home 20 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
          <Hero />

          <Service />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
