import { teamMembersData } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Team() {
  return (
    <div
      className="section-full bg-gray content-inner bg-img-fix overlay-black-dark"
      style={{ backgroundImage: "url(/images/background/bg2.jpg)" }}
    >
      <div className="container">
        <div className="section-head style2 text-white text-center">
          <h2 className="title">Our Team</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {teamMembersData.map((member, index) => (
            <div
              className={`col-lg-3 col-md-6 col-sm-6 wow ${member.animationClass}`}
              data-wow-duration="2s"
              data-wow-delay="0.3s"
              key={index}
            >
              <div className="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
                <div className="dlab-media dlab-img-overlay2 dlab-img-effect text-center">
                  <Link href={`/team-1`}>
                    <Image
                      width={358}
                      height={460}
                      src={member.image}
                      alt={member.name}
                    />
                  </Link>
                  <div className="dlab-info-has">
                    <ul className="dlab-social-icon dlab-social-icon-lg border">
                      <li>
                        <a href="#" className="fab fa-facebook-f fb-btn" />
                      </li>{" "}
                      <li>
                        <a href="#" className="fab fa-twitter tw-btn" />
                      </li>{" "}
                      <li>
                        <a href="#" className="fab fa-linkedin-in link-btn" />
                      </li>{" "}
                      <li>
                        <a href="#" className="fab fa-pinterest-p pin-btn" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-lr10 p-tb20 text-black bg-white text-center">
                  <h5 className="dlab-title m-t0 m-b5">
                    <Link href={`/team-1`}>{member.name}</Link>
                  </h5>
                  <span className="dlab-member-position">
                    {member.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
