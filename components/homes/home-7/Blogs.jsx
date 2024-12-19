"use client";
import { blogPosts } from "@/data/blogs";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Blogs() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="section-head style2 text-center">
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
          slidesPerGroup={2}
          loop
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          modules={[Autoplay]}
          className="blog-carousel owl-none owl-carousel"
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
          {blogPosts.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={`${0.3 * (i + 1)}s`}
            >
              <div className="blog-post post-style-2">
                <div className="dlab-post-media dlab-img-effect zoom">
                  <Link href={`/blog-single/${elm.title}`}>
                    <Image src={elm.imgSrc} width={700} height={438} alt="" />
                  </Link>
                </div>
                <div className="dlab-post-info">
                  <div className="dlab-post-meta">
                    <ul>
                      <li className="post-date">
                        <strong>{elm.date.day}</strong>{" "}
                        <span> {elm.date.year}</span>
                      </li>
                      <li className="post-author">
                        By <a href={`#`}>{elm.author}</a>
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
                  <div className="dlab-post-readmore">
                    <Link
                      href={`/blog-single/${elm.title}`}
                      title="READ MORE"
                      rel="bookmark"
                      className="site-button btnhover10"
                    >
                      READ MORE
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
