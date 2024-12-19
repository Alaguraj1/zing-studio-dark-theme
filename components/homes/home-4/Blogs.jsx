import { blogPosts } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Blogs() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title text-capitalize">latest blog</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {blogPosts.slice(0, 3).map((elm, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="blog-post blog-grid blog-rounded blog-effect1 fly-box">
                <div className="dlab-post-media dlab-img-effect">
                  <Link href={`/blog-single/${elm.title}`}>
                    <Image src={elm.imgSrc} width={700} height={438} alt="" />
                  </Link>
                </div>
                <div className="dlab-info p-a20 border-1 bg-white">
                  <div className="dlab-post-meta">
                    <ul>
                      <li className="post-date">
                        <strong>{elm.date.day}</strong>{" "}
                        <span> {elm.date.year}</span>
                      </li>
                      <li className="post-author">
                        By <a href="#">{elm.author}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link href={`/blog-single/${elm.title}`}>
                        {elm.title}
                      </Link>
                    </h4>
                  </div>
                  <div className="dlab-post-text">
                    <p>{elm.desc}</p>
                  </div>
                  <div className="dlab-post-readmore">
                    <Link
                      href={`/blog-single/${elm.title}`}
                      title="READ MORE"
                      rel="bookmark"
                      className="site-button btnhover16"
                    >
                      READ MORE
                      <i className="ti-arrow-right" />
                    </Link>
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
