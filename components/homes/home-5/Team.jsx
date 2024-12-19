import { teamMembers } from "@/data/team";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Team() {
  return (
    <div className="section-full bg-gray content-inner">
      <div className="container">
        <div className="section-head style2 text-center">
          <h2 className="title">Our Team</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {teamMembers.map((elm, i) => (
            <div
              key={i}
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dlab-box m-b30 dlab-team5">
                <div className="dlab-border-left" />
                <div className="dlab-border-right" />
                <div className="dlab-media">
                  <a href="#">
                    <Image width={358} height={460} alt="" src={elm.imageSrc} />
                  </a>
                </div>
                <div className="dlab-info">
                  <h4 className="dlab-title">
                    <Link href={`/team-1`}>{elm.name}</Link>
                  </h4>
                  <span className="dlab-position">{elm.position}</span>
                  <ul className="dlab-social-icon">
                    <li>
                      <a
                        className="site-button circle-sm white fab fa-facebook-f"
                        href="#"
                      />
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm white fab fa-twitter"
                        href="#"
                      />
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm white fab fa-linkedin-in"
                        href="#"
                      />
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm white fab fa-pinterest-p"
                        href="#"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
