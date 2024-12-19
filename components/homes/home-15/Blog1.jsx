import React from "react";
import Image from "next/image";
import { blogPosts7 } from "@/data/blogs";
import Link from "next/link";
export default function Blog1() {
  return (
    <div className="section-full bg-gray content-inner">
      <div className="container">
        <div className="row">
          {blogPosts7.map((post, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-6 wow bounceInUp`}
              data-wow-duration="2s"
              data-wow-delay={post.wowDelay}
            >
              {post.isBox ? (
                <div className="dlab-box m-b30">
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect on rotate no-hover">
                    <Image alt="" src={post.src} width="600" height="775" />
                    <div className="dlab-info-has p-a20 no-hover">
                      <a
                        href="#"
                        className="site-button btnhover20 button-sm m-b10"
                      >
                        Packaging
                      </a>
                      <div className="dlab-post-meta text-white">
                        <ul>
                          <li className="post-date">
                            <strong>10 Aug</strong> <span> 2016</span>
                          </li>
                          <li className="post-author">
                            By <a href="#">demongo</a>
                          </li>
                        </ul>
                      </div>
                      <div className="dlab-post-title">
                        <h5 className="post-title">
                          <Link href={`/blog-single/${post.title}`}>
                            {post.title}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="blog-post blog-grid blog-rounded blog-effect1">
                  <div className="dlab-post-media dlab-img-effect rotate">
                    <a href="#">
                      <Image alt="" src={post.src} width="700" height="500" />
                    </a>
                  </div>
                  <div className="dlab-info p-a20 border-1">
                    <div className="dlab-post-title">
                      <h4 className="post-title">
                        <Link href={`/blog-single/${post.title}`}>
                          {post.title}
                        </Link>
                      </h4>
                    </div>
                    <div className="dlab-post-text">
                      <p>{post.description}</p>
                    </div>
                    <div className="dlab-post-readmore">
                      <Link
                        href={`/blog-single/${post.title}`}
                        title="READ MORE"
                        rel="bookmark"
                        className="site-button btnhover20"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
