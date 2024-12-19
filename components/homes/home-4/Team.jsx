import { teamMembers } from "@/data/team";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Team() {
  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title text-capitalize">Meet The Team</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
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
              data-wow-delay={elm.delay}
            >
              <div className="dlab-box m-b30 dlab-team9">
                <div className="dlab-media dlab-media-right">
                  <Link href={`/team-1`}>
                    <Image alt="" src={elm.imageSrc} width={500} height={600} />
                  </Link>
                  <div className="dlab-info-has">
                    <ul className="dlab-social-icon">
                      <li>
                        <a className="site-button fab fa-facebook-f" href="#" />
                      </li>{" "}
                      <li>
                        <a className="site-button fab fa-twitter" href="#" />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-linkedin-in"
                          href="#"
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="site-button fab fa-pinterest-p"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="clearfix">
                    <h4 className="dlab-title">
                      <Link href={`/team-1`}>{elm.name}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
