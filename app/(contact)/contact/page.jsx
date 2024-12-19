import Contact2 from "@/components/contact/Contact2";
import Footer15 from "@/components/footers/Footer15";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Header17 from "@/components/headers/Header17";
import React from "react";

export const metadata = {
  title: "Contact 2 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
          <Contact2  />
        </div>
        <Footer2 contactSection="false"/>
      </div>
    </>
  );
}
