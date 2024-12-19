"use client";

import { blogPosts4 } from "@/data/blogs";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Blogs() {
  return (
    <div
      className="section-full content-inner overlay-black-middle bg-img-fix"
      style={{ backgroundImage: "url(/images/background/bg15.jpg)" }}
    >
      <div className="container">
        <div className="section-head style2 text-center text-white">
          <h2 className="title">Latest blog post</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          modules={[Autoplay]}
          className="blog-carousel owl-carousel owl-btn-3 owl-btn-center-lr btn-white"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >
          {blogPosts4.map((post, i) => (
            <SwiperSlide
              key={i}
              className="item wow fadeInUp"
              data-wow-duration={post.duration}
              data-wow-delay={post.delay}
            >
              <div className="blog-post blog-grid blog-rounded blog-effect1">
                <div className="dlab-post-media dlab-img-effect">
                  <Link href={`/blog-single/${post.title}`}>
                    <Image src={post.image} width={700} height={500} alt="" />
                  </Link>
                </div>
                <div className="dlab-info p-a20 border-1">
                  <div className="dlab-post-meta">
                    <ul>
                      <li className="post-date">
                        <strong>{post.date.split(" ")[0]}</strong>{" "}
                        <span>{post.date.split(" ")[1]}</span>
                      </li>
                      <li className="post-author">
                        By <a href="#">{post.author}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link href={`/blog-single/${post.title}`}>
                        {post.title}
                      </Link>
                    </h4>
                  </div>
                  <div className="dlab-post-text">
                    <p>{post.excerpt}</p>
                  </div>
                  <div className="dlab-post-readmore">
                    <Link
                      href={`/blog-single/${post.title}`}
                      title="READ MORE"
                      rel="bookmark"
                      className="site-button btnhover20"
                    >
                      READ MORE
                      <i className="ti-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
