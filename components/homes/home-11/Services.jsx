import React from "react";
import Image from "next/image";
import { serviceItems4 } from "@/data/services";
import Link from "next/link";
export default function Services() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Quality With Dedication</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {serviceItems4.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-12 m-b30 wow ${item.animation}`}
              data-wow-duration="2s"
              data-wow-delay={item.delay}
            >
              <div className="dlab-box service-box-5">
                <div className="dlab-media radius-sm dlab-img-overlay1">
                  <Link href={`/services-details/${item.title}`}>
                    <Image alt="" src={item.src} width={700} height={500} />
                  </Link>
                </div>
                <div className="dlab-info">
                  <div className="icon-bx-sm icon-bx bg-primary icon-up">
                    <Link
                      href={`/services-details/${item.title}`}
                      className="icon-cell"
                    >
                      <i className={item.iconClass} />
                    </Link>
                  </div>
                  <h4 className="title">
                    <Link href={`/services-details/${item.title}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
