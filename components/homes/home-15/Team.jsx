import React from "react";
import Image from "next/image";
import { teamMembers9 } from "@/data/team";
import Link from "next/link";
export default function Team() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Our Team</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {teamMembers9.map((member, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 col-sm-6 wow ${member.animationClass}`}
              data-wow-duration="2s"
              data-wow-delay={member.animationDelay}
            >
              <div className="dlab-box m-b30 dlab-team8">
                <div className="dlab-media">
                  <Link href={`/team-1`}>
                    <Image
                      alt=""
                      src={member.imageSrc}
                      width="350"
                      height="350"
                    />
                  </Link>
                  <ul className="dlab-social-icon">
                    {member.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          className={`site-button ${link.className}`}
                          href={link.href}
                        ></a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dlab-info">
                  <h4 className="dlab-title">
                    <Link href={`/team-1`}>{member.name}</Link>
                  </h4>
                  <span className="dlab-position">{member.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
