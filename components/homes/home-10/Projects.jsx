"use client";

import { galleryItems } from "@/data/projects";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const filterItems = [
  { filter: "*", label: "All", isActive: true },
  { filter: ".healty", label: "Solid Wastes", isActive: false },
  { filter: ".food", label: "Leather Products", isActive: false },
  { filter: ".organic", label: "Leather processing", isActive: false },
];
import Image from "next/image";
export default function Projects() {
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
                {filterItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <li
                      data-filter={item.filter}
                      className={`btn ${
                        currentFilter == item.filter ? "active" : ""
                      }`}
                    >
                      <input type="radio" />
                      <a
                        onClick={() => updateCategory(item.filter)}
                        className="site-button btnhover21 outline outline-2 button-sm"
                      >
                        <span>{item.label}</span>
                      </a>
                    </li>
                    {"  "}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row sp15">
          <div className="col-lg-12 m-b15">
            <ul
              id="masonry"
              ref={isotopContainer}
              className="dlab-gallery-listing gallery mfp-gallery text-center"
            >
              {galleryItems.map((item, index) => (
                <li
                  className={`card-container col-lg-3 col-md-6 col-sm-6 ${item.categories} m-b15 `}
                  data-wow-duration="2s"
                  data-wow-delay="0.3s"
                  key={index}
                >
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1 style1">
                    <Image src={item.src} width={600} height={722} alt="" />
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
