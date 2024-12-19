import { teamMembers } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Team() {
  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Our team</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row dlab-team10-area">
          {teamMembers.map((member, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={member.delay}
              key={index}
            >
              <div className="dlab-box m-b30 dlab-team10">
                <div className="dlab-media">
                  <Link href={`/team-1`}>
                    <Image
                      alt=""
                      src={member.imageSrc}
                      width={500}
                      height={600}
                    />
                  </Link>
                </div>
                <div className="dlab-info">
                  <h4 className="dlab-title">
                    <Link href={`/team-1`}>{member.name}</Link>
                  </h4>
                  <span className="dlab-position">{member.position}</span>
                  <ul className="dlab-social-icon">
                    <li>
                      <a
                        className="site-button fab fa-facebook-f facebook"
                        href="#"
                      />
                    </li>{" "}
                    <li>
                      <a
                        className="site-button fab fa-twitter twitter"
                        href="#"
                      />
                    </li>{" "}
                    <li>
                      <a
                        className="site-button fab fa-linkedin-in linkedin"
                        href="#"
                      />
                    </li>{" "}
                    <li>
                      <a
                        className="site-button fab fa-pinterest-p pinterest"
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
