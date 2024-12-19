import { teamMembers2 } from "@/data/team";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Team() {
  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Our Crew Team</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {teamMembers2.map((member, i) => (
            <div
              key={i}
              className={`col-lg-3 col-md-6 col-sm-6 wow ${member.animationClass}`}
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="our-team m-b30">
                <div className="dlab-media radius-sm zoom dlab-img-effect">
                  <Image
                    src={member.imgSrc}
                    width={500}
                    height={600}
                    alt={member.name}
                  />
                </div>
                <div className="team-title-bx text-center">
                  <h2 className="title">
                    <Link href={`/team-1`}>{member.name}</Link>
                  </h2>
                  <span>{member.role}</span>
                  <ul className="social-list">
                    <li>
                      <a
                        href="#"
                        className="site-button-link facebook fab fa-facebook-f"
                      />
                    </li>{" "}
                    <li>
                      <a
                        href="#"
                        className="site-button-link twitter fab fa-twitter"
                      />
                    </li>{" "}
                    <li>
                      <a
                        href="#"
                        className="site-button-link google-plus fab fa-google"
                      />
                    </li>{" "}
                    <li>
                      <a
                        href="#"
                        className="site-button-link youtube fab fa-youtube"
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
