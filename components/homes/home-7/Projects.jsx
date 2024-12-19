"use client";
import Image from "next/image";
import { projectItems2 } from "@/data/projects";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const filterItems = [
  {
    id: 1,
    filter: "*",
    label: "All",
  },
  {
    id: 2,
    filter: ".healty",
    label: "Healthy Food",
  },
  {
    id: 3,
    filter: ".food",
    label: "Food",
  },
  {
    id: 4,
    filter: ".organic",
    label: "Organic",
  },
];

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
    <div className="section-full bg-white content-inner-2">
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
                {filterItems.map((item, i) => (
                  <React.Fragment key={i}>
                    <li
                      data-filter={item.filter}
                      className={`btn ${
                        currentFilter == item.filter ? "active" : ""
                      }  `}
                    >
                      <input
                        type="radio"
                        name="filter"
                        id={`filter-${item.id}`}
                      />
                      <a
                        onClick={() => updateCategory(item.filter)}
                        className="site-button btnhover10 outline outline-2 button-sm"
                      >
                        <span>{item.label}</span>
                      </a>
                    </li>{" "}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row sp15">
          <div className="col-lg-12">
            <ul
              id="masonry"
              ref={isotopContainer}
              className="dlab-gallery-listing gallery mfp-gallery text-center"
            >
              {projectItems2.map((item, index) => (
                <li key={index} className={item.classes}>
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1 style1">
                    <Image
                      src={item.imgSrc}
                      width={600}
                      height={722}
                      alt={item.title}
                    />
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
