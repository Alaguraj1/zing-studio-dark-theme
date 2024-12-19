import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      {/* Service Info Head */}

      {/* Service Info Head End */}
      {/* About Us */}
      <div className="section-full content-inner bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="our-story">
                <span>OUR STORY</span>
                <h2 className="title">
                  Commited to High <br />
                  Quality <span className="text-primary"> Service </span>
                </h2>
                <h4 className="title">
                  Zing Studio is a creative & digital marketing agency based in
                  Coimbatore, India focused on delivering impactful strategies
                  to help you achieve your business goals cost-effectively.
                </h4>
                <p>
                  At Zing Studio, we promote a culture of continual learning,
                  innovation and creativity to deliver tangible outcomes for
                  your business. In an industry that is continuously shifting
                  and changing shape, we stay ahead of the curve by keeping up
                  with emerging trends and believe that what works for us can
                  work for you, too.
                </p>
                {/* <Link href={`/about-2`} className="site-button btnhover14">
                  Read More
                </Link> */}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <Image
                className="radius-sm"
                alt=""
                src="/images/about-us/about-img.jpg"
                width="600"
                height="800"
              />
            </div>
          </div>
        </div>
      </div>
      {/* About Us End */}
    </>
  );
}
