import React from "react";
import Image from "next/image";
import { teamMembers7 } from "@/data/team";
import Link from "next/link";
export default function Team() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="section-head style2 text-center">
          <h2 className="title">Meet Our Team</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {teamMembers7.map((member, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 col-sm-6 m-b30 wow ${member.animation}`}
              data-wow-duration="2s"
              data-wow-delay={member.delay}
            >
              <div className="dlab-box fly-box dlab-img-effect off-color">
                <div className="dlab-media">
                  <Link href={`/team-1`}>
                    <Image alt="" src={member.src} width={500} height={600} />
                  </Link>
                </div>
                <div className="dlab-info p-a20 p-t40 border-1">
                  <h5 className="dlab-title m-tb0">
                    <Link href={`/team-1`}>{member.name}</Link>
                  </h5>
                  <div className="bg-primary skew-content-box">
                    <ul className="dlab-social-icon">
                      <li>
                        <a className="fab fa-facebook-f" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-twitter" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-linkedin-in" href="#" />
                      </li>{" "}
                      <li>
                        <a className="fab fa-google-plus-g" href="#" />
                      </li>
                    </ul>
                  </div>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
