"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="dz-ship-industry-zone position-relative">
        <div className="dzpattern position-absolute">
          <Image
            alt="#"
            src="/images/pattern/pt13.jpg"
            width="100"
            height="160"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner-content">
                <h1 className="dz-title fw-semibold">
                  Economy Needs A Healthy Steel Industy
                </h1>
                <p className="fw-bold">
                  We can make the photography work more presentable and
                  memorable because we are a professional and experienced team
                </p>
                <div className="dz-btn d-flex align-items-center">
                  <Link
                    href={`/about-1`}
                    className="btn bg-primary fw-bold text-white"
                  >
                    About Us
                  </Link>
                  <div className="video-box d-flex align-items-center">
                    <a
                      onClick={() => setOpen(true)}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <svg
                        width={12}
                        height={15}
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.791504 13.8862V1.39166C0.791504 0.852009 1.3874 0.526813 1.84092 0.816852L11.6073 7.06412C12.0274 7.33306 12.0274 7.94478 11.6073 8.21373L1.84092 14.461C1.3874 14.751 0.791504 14.4258 0.791504 13.8862Z"
                          fill="var(--color-primary)"
                        />
                      </svg>
                    </a>
                    <h6 className="mb-0 fw-bold">Watch Video</h6>
                  </div>
                </div>
                <div className="dz-bannerlist">
                  <h6 className="fw-bold text-primary">Our Services</h6>
                  <ol>
                    <li className="fw-bold">
                      01
                      <a href="#">
                        Oil &amp; Gas Industry.
                        <svg
                          width={26}
                          height={27}
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_43_68)">
                            <path
                              d="M19.4999 8.1375C19.4999 7.85018 19.3858 7.57463 19.1826 7.37147C18.9795 7.1683 18.7039 7.05417 18.4166 7.05417L9.74993 7C9.46262 7 9.18707 7.11414 8.9839 7.3173C8.78074 7.52047 8.6666 7.79602 8.6666 8.08333C8.6666 8.37065 8.78074 8.6462 8.9839 8.84937C9.18707 9.05253 9.46262 9.16667 9.74993 9.16667H15.7733L6.8141 18.1475C6.71256 18.2482 6.63197 18.368 6.57697 18.5C6.52197 18.6321 6.49365 18.7737 6.49365 18.9167C6.49365 19.0597 6.52197 19.2013 6.57697 19.3333C6.63197 19.4653 6.71256 19.5851 6.8141 19.6858C6.91481 19.7874 7.03463 19.868 7.16664 19.923C7.29866 19.978 7.44025 20.0063 7.58327 20.0063C7.72628 20.0063 7.86788 19.978 7.99989 19.923C8.13191 19.868 8.25172 19.7874 8.35243 19.6858L17.3333 10.705V16.75C17.3333 17.0373 17.4474 17.3129 17.6506 17.516C17.8537 17.7192 18.1293 17.8333 18.4166 17.8333C18.7039 17.8333 18.9795 17.7192 19.1826 17.516C19.3858 17.3129 19.4999 17.0373 19.4999 16.75V8.1375Z"
                              fill="#C3BFB3"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_43_68">
                              <rect
                                width={26}
                                height={26}
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li className="fw-bold">
                      02
                      <a href="#">
                        Petroleum Refinery.
                        <svg
                          width={26}
                          height={27}
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_43_68)">
                            <path
                              d="M19.4999 8.1375C19.4999 7.85018 19.3858 7.57463 19.1826 7.37147C18.9795 7.1683 18.7039 7.05417 18.4166 7.05417L9.74993 7C9.46262 7 9.18707 7.11414 8.9839 7.3173C8.78074 7.52047 8.6666 7.79602 8.6666 8.08333C8.6666 8.37065 8.78074 8.6462 8.9839 8.84937C9.18707 9.05253 9.46262 9.16667 9.74993 9.16667H15.7733L6.8141 18.1475C6.71256 18.2482 6.63197 18.368 6.57697 18.5C6.52197 18.6321 6.49365 18.7737 6.49365 18.9167C6.49365 19.0597 6.52197 19.2013 6.57697 19.3333C6.63197 19.4653 6.71256 19.5851 6.8141 19.6858C6.91481 19.7874 7.03463 19.868 7.16664 19.923C7.29866 19.978 7.44025 20.0063 7.58327 20.0063C7.72628 20.0063 7.86788 19.978 7.99989 19.923C8.13191 19.868 8.25172 19.7874 8.35243 19.6858L17.3333 10.705V16.75C17.3333 17.0373 17.4474 17.3129 17.6506 17.516C17.8537 17.7192 18.1293 17.8333 18.4166 17.8333C18.7039 17.8333 18.9795 17.7192 19.1826 17.516C19.3858 17.3129 19.4999 17.0373 19.4999 16.75V8.1375Z"
                              fill="#C3BFB3"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_43_68">
                              <rect
                                width={26}
                                height={26}
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li className="fw-bold">
                      03
                      <a href="#">
                        Petroleum Refinery.
                        <svg
                          width={26}
                          height={27}
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_43_68)">
                            <path
                              d="M19.4999 8.1375C19.4999 7.85018 19.3858 7.57463 19.1826 7.37147C18.9795 7.1683 18.7039 7.05417 18.4166 7.05417L9.74993 7C9.46262 7 9.18707 7.11414 8.9839 7.3173C8.78074 7.52047 8.6666 7.79602 8.6666 8.08333C8.6666 8.37065 8.78074 8.6462 8.9839 8.84937C9.18707 9.05253 9.46262 9.16667 9.74993 9.16667H15.7733L6.8141 18.1475C6.71256 18.2482 6.63197 18.368 6.57697 18.5C6.52197 18.6321 6.49365 18.7737 6.49365 18.9167C6.49365 19.0597 6.52197 19.2013 6.57697 19.3333C6.63197 19.4653 6.71256 19.5851 6.8141 19.6858C6.91481 19.7874 7.03463 19.868 7.16664 19.923C7.29866 19.978 7.44025 20.0063 7.58327 20.0063C7.72628 20.0063 7.86788 19.978 7.99989 19.923C8.13191 19.868 8.25172 19.7874 8.35243 19.6858L17.3333 10.705V16.75C17.3333 17.0373 17.4474 17.3129 17.6506 17.516C17.8537 17.7192 18.1293 17.8333 18.4166 17.8333C18.7039 17.8333 18.9795 17.7192 19.1826 17.516C19.3858 17.3129 19.4999 17.0373 19.4999 16.75V8.1375Z"
                              fill="#C3BFB3"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_43_68">
                              <rect
                                width={26}
                                height={26}
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li className="fw-bold">
                      04
                      <a href="#">
                        Automative
                        <svg
                          width={26}
                          height={27}
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_43_68)">
                            <path
                              d="M19.4999 8.1375C19.4999 7.85018 19.3858 7.57463 19.1826 7.37147C18.9795 7.1683 18.7039 7.05417 18.4166 7.05417L9.74993 7C9.46262 7 9.18707 7.11414 8.9839 7.3173C8.78074 7.52047 8.6666 7.79602 8.6666 8.08333C8.6666 8.37065 8.78074 8.6462 8.9839 8.84937C9.18707 9.05253 9.46262 9.16667 9.74993 9.16667H15.7733L6.8141 18.1475C6.71256 18.2482 6.63197 18.368 6.57697 18.5C6.52197 18.6321 6.49365 18.7737 6.49365 18.9167C6.49365 19.0597 6.52197 19.2013 6.57697 19.3333C6.63197 19.4653 6.71256 19.5851 6.8141 19.6858C6.91481 19.7874 7.03463 19.868 7.16664 19.923C7.29866 19.978 7.44025 20.0063 7.58327 20.0063C7.72628 20.0063 7.86788 19.978 7.99989 19.923C8.13191 19.868 8.25172 19.7874 8.35243 19.6858L17.3333 10.705V16.75C17.3333 17.0373 17.4474 17.3129 17.6506 17.516C17.8537 17.7192 18.1293 17.8333 18.4166 17.8333C18.7039 17.8333 18.9795 17.7192 19.1826 17.516C19.3858 17.3129 19.4999 17.0373 19.4999 16.75V8.1375Z"
                              fill="#C3BFB3"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_43_68">
                              <rect
                                width={26}
                                height={26}
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-media">
                <video
                  autoPlay
                  loop
                  className="video-background"
                  muted
                  width={700}
                  height={800}
                >
                  <source src="/video/video4.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
