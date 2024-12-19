import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/home-1/Blogs";
import Clients from "@/components/homes/home-1/Clients";
import Cta from "@/components/homes/home-1/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Services from "@/components/homes/home-1/Services";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Socials from "@/components/homes/home-17/Socials";

export const metadata = {
  title: "Home 17 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function Home() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Socials />
          <div className="content-block">
            {/* <Hero /> */}
            <About />
            <Cta />
            <Services />
            <Facts />
            <Team />
            <Testimonials />
            <Blogs />
            <Clients />
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
