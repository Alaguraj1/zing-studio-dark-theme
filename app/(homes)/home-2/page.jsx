import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/home-2/Hero";
import Service from "@/components/homes/home-2/Service";
import React from "react";

export const metadata = {
  title: "Home 2 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header2 />
        <div className="page-content bg-white">
          <Hero />

          <Service />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
