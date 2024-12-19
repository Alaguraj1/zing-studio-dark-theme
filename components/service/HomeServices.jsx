import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function HomeService() {
  return (
    <div className="content-block">
      {/* Content Section */}
      <div className="section-full">
        <div className="row spno about-industry">
          <div
            className="col-lg-8 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/Home-Page/web-design.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title text-black">
                  <span>Web </span> <br />
                  Design
                </h2>
                <p>
                  At Zing Studio we design websites with your customer in mind,
                  because modern web design is more than just about creating a
                  visually stunning site.
                </p>
                <Link
                  href={`/web-design`}
                  className="site-button outline outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>E-commerce </span>
                </h2>
                <p>
                  The modern consumer of today looks for a simple and intuitive
                  online shopping experience that responds to their needs. At
                  Zing Studio, our dynamic team..
                </p>
                <Link
                  href={`/e-commerce`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/Home-Page/e-commerce-managment.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.8s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Digital </span> <br />
                  Marketing
                </h2>
                {/* <p>
                  Open-source Development Open Source commerce development is
                  the order of the way in Ecommerce development. The open source
                  platforms offer a host os flexible and beneficial features...
                </p> */}
                <Link
                  href={`/e-commerce`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/Home-Page/ecommerce.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.8s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>E-commerce </span> <br />
                  Management
                </h2>
                <p>
                  It can be overwhelming for most businesses to manage
                  inventory, process orders and address customer queries.
                </p>
                <Link
                  href={`/e-commerce-management`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/Home-Page/digital-marketing.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Content Section End */}
    </div>
  );
}
