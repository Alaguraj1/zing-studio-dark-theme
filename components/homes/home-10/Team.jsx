import { teamMembers4 } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Team() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="section-head style2 text-center">
          <h2 className="title">Meet the Team</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {teamMembers4.map((member, index) => (
            <div
              className={`col-lg-4 col-md-6 col-sm-6 wow ${member.animation}`}
              data-wow-duration="2s"
              data-wow-delay="0.3s"
              key={index}
            >
              <div className="dlab-box m-b30 dlab-team6">
                <div className="dlab-media">
                  <Link href={`/team-2`}>
                    <Image
                      alt={member.name}
                      width={500}
                      height={600}
                      src={member.imgSrc}
                    />
                  </Link>
                </div>
                <div className="dlab-info">
                  <h4 className="dlab-title">
                    <Link href={`/team-2`}>{member.name}</Link>
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
