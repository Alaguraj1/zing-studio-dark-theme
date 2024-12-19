import React from "react";
import Link from "next/link";
export default function Services() {
  return (
    <div className="section-full content-inner-1 frame-sr-list-area">
      <div className="section-head text-center">
        <h2 className="title">Our Services</h2>
        <div className="dlab-separator bg-primary m-b0" />
      </div>
      <div className="row align-items-center">
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <ul className="service-list">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </li>
            <li>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </li>
            <li>
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <ul className="service-list">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </li>
            <li>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </li>
            <li>
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </li>
          </ul>
        </div>
      </div>
      <div className="m-t40 text-center">
        <Link href={`/services-1`} className="site-button btnhover14">
          View All Services
        </Link>
      </div>
    </div>
  );
}
