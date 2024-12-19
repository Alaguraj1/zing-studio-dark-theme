import Footer13 from "@/components/footers/Footer13";
import Header15 from "@/components/headers/Header15";
import Blog1 from "@/components/homes/home-15/Blog1";
import Blogs2 from "@/components/homes/home-15/Blogs2";
import Hero from "@/components/homes/home-15/Hero";
import ProjectGallery from "@/components/homes/home-15/ProjectGallery";
import Services1 from "@/components/homes/home-15/Services1";
import Services2 from "@/components/homes/home-15/Services2";
import Team from "@/components/homes/home-15/Team";
import Testimonials from "@/components/homes/home-15/Testimonials";

export const metadata = {
  title: "Home 15 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <div className="page-wraper  ">
      <Header15 />
      <Hero />
      <div className="page-content bg-white">
        <div className="content-block">
          <Services1 />
          <Blog1 />
          <ProjectGallery />
          <Services2 />
          <Team />
          <Testimonials />
          <Blogs2 />
        </div>
      </div>
      <Footer13 />
    </div>
  );
}
