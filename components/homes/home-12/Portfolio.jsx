"use client";

import { portfolioItems2 } from "@/data/projects";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const filterItems = [
  { filter: "*", label: "All" },
  { filter: ".beer-keg", label: "Beer Keg" },
  { filter: ".brewing", label: "Brewing" },
  { filter: ".malt", label: "Malt" },
];

export default function Portfolio() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".card-container",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({
      filter: val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Our Gallery</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="site-filters m-b20">
              <ul className="filters" data-bs-toggle="buttons">
                {filterItems.map((item) => (
                  <React.Fragment key={item.filter}>
                    {" "}
                    <li
                      onClick={() => updateCategory(item.filter)}
                      className={`btn ${
                        currentFilter == item.filter ? "active" : ""
                      } `}
                    >
                      <input type="radio" />
                      <a className="site-button btnhover20 outline outline-2 button-sm">
                        <span>{item.label}</span>
                      </a>
                    </li>{" "}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 p-lr0">
            <ul
              ref={isotopContainer}
              id="masonry"
              className="dlab-gallery-listing text-center row gallery-grid-4"
            >
              {portfolioItems2.map((item, i) => (
                <li
                  key={i}
                  className={
                    "card-container col-lg-6 col-md-6 col-sm-6 " +
                    " " +
                    item.categories
                  }
                  data-wow-duration={item.duration}
                  data-wow-delay={item.delay}
                >
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1 style1 m-b30 radius-sm">
                    <Image src={item.image} width={600} height={722} alt="" />
                    <div className="overlay-bx">
                      <div className="portinner">
                        <h3 className="port-title">
                          <Link href={`/portfolio-details/${item.title}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
