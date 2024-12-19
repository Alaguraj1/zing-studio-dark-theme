import Testimonials from "@/components/common/Testimonials";
import Footer13 from "@/components/footers/Footer13";
import Header13 from "@/components/headers/Header13";
import Blogs from "@/components/homes/home-13/Blogs";
import Cta from "@/components/homes/home-13/Cta";
import Fact from "@/components/homes/home-13/Fact";
import Hero from "@/components/homes/home-13/Hero";
import ProjectGallery from "@/components/homes/home-13/ProjectGallery";
import Services from "@/components/homes/home-13/Services";
import Services2 from "@/components/homes/home-13/Services2";
import Team from "@/components/homes/home-13/Team";

export const metadata = {
  title: "Home 13 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <div className="page-wraper  ">
      <Header13 />
      <Hero />
      <div className="page-content bg-white">
        <div className="content-block">
          <Services />
          <Services2 />
          <ProjectGallery />
          <Team />
          <Fact />
          <Testimonials />
          <Blogs />
          <Cta />
        </div>
      </div>
      <Footer13 />
    </div>
  );
}
