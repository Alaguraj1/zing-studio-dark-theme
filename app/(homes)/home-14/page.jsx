import Footer13 from "@/components/footers/Footer13";
import Header14 from "@/components/headers/Header14";
import Blogs from "@/components/homes/home-14/Blogs";
import Cta from "@/components/homes/home-14/Cta";
import Features from "@/components/homes/home-14/Features";
import Hero from "@/components/homes/home-14/Hero";
import ProjectGallery from "@/components/homes/home-14/ProjectGallery";
import Service from "@/components/homes/home-14/Service";
import Team from "@/components/homes/home-14/Team";
import Testimonials from "@/components/homes/home-14/Testimonials";

export const metadata = {
  title: "Home 14 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <div className="page-wraper  ">
      <Header14 />
      <Hero />
      <div className="page-content bg-white">
        <div className="content-block">
          <Features />
          <ProjectGallery />
          <Service />
          <Blogs />
          <Team />

          <Testimonials />

          <Cta />
        </div>
      </div>
      <Footer13 />
    </div>
  );
}
