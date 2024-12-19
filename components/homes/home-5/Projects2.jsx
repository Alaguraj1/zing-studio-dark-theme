"use client";
import { portfolioItems } from "@/data/projects";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// const filterOptions = [
//   {
//     filter: "*",
//     iconClass: "flaticon-worker",
//     label: "Construction",
//   },
//   {
//     filter: ".penthouse",
//     iconClass: "flaticon-crane",
//     label: "Architecture",
//   },
//   {
//     filter: ".royal",
//     iconClass: "flaticon-analytics",
//     label: "Consulting",
//   },
//   {
//     filter: ".standard",
//     iconClass: "flaticon-optimization",
//     label: "Mechanical",
//   },
// ];

export default function Projects2() {
  // const [currentFilter, setCurrentFilter] = useState("*");
  // const isotopContainer = useRef();
  // const isotope = useRef();
  // const initIsotop = async () => {
  //   const Isotope = (await import("isotope-layout")).default;
  //   const imagesloaded = (await import("imagesloaded")).default;

  //   // Initialize Isotope in the mounted hook
  //   isotope.current = new Isotope(isotopContainer.current, {
  //     itemSelector: ".card-container",
  //     layoutMode: "masonry", // or 'fitRows', depending on your layout needs
  //   });
  //   imagesloaded(isotopContainer.current).on("progress", function () {
  //     // Trigger Isotope layout
  //     isotope.current.layout();
  //   });
  // };
  // const updateCategory = (val) => {
  //   setCurrentFilter(val);
  //   isotope.current.arrange({
  //     filter: val,
  //   });
  //   //   isotope.value.layout();
  // };
  // useEffect(() => {
  //   /////////////////////////////////////////////////////
  //   // Magnate Animation

  //   initIsotop();
  // }, []);
  return (
    <div
      className="section-full content-inner-2 wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.6s"
      style={{
        background: "linear-gradient(to bottom, #1a1a1a 50%, #1e1e1e 50%)",
      }}
    >
      <div className="container-fluid">
        <div className="section-head style2 text-center">
          <h2 className="title m-b10">Our Works</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        {/* <div className="row">
          <div className="col-lg-12 text-center">
            <div className="site-filters m-b20 filters2">
              <ul className="filters" data-bs-toggle="buttons">
                {filterOptions.map((option, index) => (
                  <li
                    onClick={() => updateCategory(option.filter)}
                    className={`btn ${
                      currentFilter == option.filter ? "active" : ""
                    }`}
                    key={index}
                  >
                    <input type="radio" />
                    <a>
                      <i className={option.iconClass} />
                      <span>{option.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
        <div className="row p-l0 sp10">
          <div className="col-lg-12">
            <ul
              id="masonry"
              className="dlab-gallery-listing gallery mfp-gallery text-center row"
            >
              <li className={"card-container col-lg-6 col-md-6 col-sm-6 "}>
                <div
                  className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3 wow fadeInUp seth  will-animate"
                  data-wow-delay="0.3s"
                  data-wow-duration="1s"
                >
                  <img src="/images/our-work/our-works-img-1.jpg" alt="" />
                  <div className="overlay-bx">
                    <div className="portinner">
                      <div className="port-up">
                        <h3 className="port-title">
                          <Link href={`/portfolio-details`}>Testing</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className={"card-container col-lg-3 col-md-3 col-sm-6"}>
                <div
                  className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3 wow fadeInUp seth  will-animate"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.3s"
                >
                  <img src="/images/our-work/our-works-img-2.jpg" alt="" />
                  <div className="overlay-bx">
                    <div className="portinner">
                      <div className="port-up">
                        <h3 className="port-title">
                          <Link href={`/portfolio-details`}>Testing</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className={"card-container col-lg-3 col-md-3 col-sm-6"}>
                <div
                  className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3 wow fadeInUp  seth  will-animate"
                  data-wow-delay="0.9s"
                  data-wow-duration="1.6s"
                >
                  <img src="/images/our-work/our-works-img-3.jpg" alt="" />
                  <div className="overlay-bx">
                    <div className="portinner">
                      <div className="port-up">
                        <h3 className="port-title">
                          <Link href={`/portfolio-details`}>Testing</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className={"card-container col-lg-3 col-md-3 col-sm-6"}>
                <div
                  className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3 wow fadeInUp seth  will-animate"
                  data-wow-delay="0.3s"
                  data-wow-duration="1.9s"
                >
                  <img src="/images/our-work/our-works-img-4.jpg" alt="" />
                  <div className="overlay-bx">
                    <div className="portinner">
                      <div className="port-up">
                        <h3 className="port-title">
                          <Link href={`/portfolio-details`}>Testing</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className={"card-container col-lg-3 col-md-3 col-sm-6"}>
                <div
                  className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3 wow fadeInUp seth  will-animate"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.12s"
                >
                  <img src="/images/our-work/our-works-img-5.jpg" alt="" />
                  <div className="overlay-bx">
                    <div className="portinner">
                      <div className="port-up">
                        <h3 className="port-title">
                          <Link href={`/portfolio-details`}>Testing</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className={"card-container col-lg-6 col-md-6 col-sm-6"}>
                <div
                  className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3 wow fadeInUp  seth  will-animate"
                  data-wow-delay="0.9s"
                  data-wow-duration="1.15s"
                >
                  <img src="/images/our-work/our-works-img-6.jpg" alt="" />
                  <div className="overlay-bx">
                    <div className="portinner">
                      <div className="port-up">
                        <h3 className="port-title">
                          <Link href={`/portfolio-details`}>Testing</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
