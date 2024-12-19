"use client";
import { portfolioItems3 } from "@/data/projects";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const filters = [
  { filter: "*", text: "All", isActive: true },
  { filter: ".web-design", text: "Web Design" },
  { filter: ".e-commerce", text: "E-Commerce" },
  { filter: ".digital-marketing", text: "Digital Marketing" },
  { filter: ".e-commerce-management", text: "E-Commerce Management" },
  // { filter: ".photography", text: "Plants" },
];
import Image from "next/image";
export default function Portfolio2() {
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
    <div
      className="section-full content-inner-2 portfolio text-uppercase bg-gray"
      id="portfolio"
    >
      <div className="container">
        <div className="site-filters clearfix center m-b40">
          <div className="our-story text-capitalize">
            <h2 className="title">
              <span className="text-primary"> Portfolio </span>
            </h2>
            <h4 className="title">
              {" "}
              Explore our creative solutions We have a proven track record of
              delivering outstanding outcomes for our customers.
            </h4>
          </div>

          <ul className="filters mt-3" data-bs-toggle="buttons">
            {filters.map((item, index) => (
              <React.Fragment key={index}>
                <li
                  data-filter={item.filter}
                  className={`btn ${
                    currentFilter == item.filter ? "active" : ""
                  }`}
                  onClick={() => updateCategory(item.filter)}
                >
                  <input type="radio" />
                  <a
                    href="#"
                    className="site-button-secondry button-sm radius-xl"
                  >
                    <span>{item.text}</span>
                  </a>
                </li>{" "}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="clearfix" id="lightgallery">
          <ul
            id="masonry"
            ref={isotopContainer}
            className="portfolio-ic dlab-gallery-listing gallery-grid-4 lightgallery text-center"
          >
            {portfolioItems3.map((item, index) => (
              <li
                className={`${item.filter} card-container col-lg-4 col-md-6 col-sm-6 p-a0`}
                key={index}
              >
                <div className="dlab-box dlab-gallery-box">
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                    <Link href={item.link} target="_blank">
                      <Image
                        src={item.imageSrc}
                        width={650}
                        height={528}
                        alt=""
                      />
                    </Link>
                    <div className="overlay-bx">
                      <div className="overlay-icon">
                        <div className="text-white">
                          <Link href={item.link} target="_blank">
                            <i className="fas fa-link icon-bx-xs"></i>
                          </Link>
                          {/* <span
                            data-exthumbimage={item.imageSrc}
                            data-src={item.imageSrc}
                            className="check-km"
                            title={item.title}
                          >
                            <i className="far fa-image icon-bx-xs"></i>
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dez-info p-a30 bg-white">
                    <p className="dez-title m-t0">
                      <Link href={`/portfolio-details/${item.title}`}>
                        {item.title}
                      </Link>
                    </p>
                    <p>
                      <small>{item.category}</small>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
