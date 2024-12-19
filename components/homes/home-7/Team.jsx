import { teamMembers3 } from "@/data/team";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Team() {
  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Our Team</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {teamMembers3.map((member, index) => (
            <div
              key={index}
              className={member.classes}
              data-wow-duration={member.dataWowDuration}
              data-wow-delay={member.dataWowDelay}
            >
              <div className="dlab-box m-b30 dlab-team4">
                <div className="dlab-media">
                  <Link href={`/team-1`}>
                    <Image
                      alt={member.name}
                      width={350}
                      height={350}
                      src={member.imgSrc}
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
                        className="site-button circle-sm gray-light fab fa-facebook-f"
                        href="#"
                      />
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-twitter"
                        href="#"
                      />
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-linkedin-in"
                        href="#"
                      />
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-pinterest-p"
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
