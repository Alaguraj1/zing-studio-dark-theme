"use client";
import React from "react";
import Nav2 from "./component/Nav2";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socials";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
export default function Header8() {
  return (
    <header className="site-header header center mo-left">
      {/* main header */}
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="dlab-topbar-left">
              <ul>
                <li>
                  <i className="fas fa-phone-alt m-r5" /> +00 456 872 1230
                </li>
                <li>
                  <i className="far fa-envelope m-r5" /> exemple@gmail.com
                </li>
              </ul>
            </div>
            <div className="dlab-topbar-right topbar-social">
              <span className="m-r10">Follows Us :</span>
              <ul>
                <li>
                  <a
                    href="#"
                    className="site-button circle-sm facebook sharp-sm"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>{" "}
                </li>
                <li>
                  <a href="#" className="site-button circle-sm google-plus">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>{" "}
                <li>
                  <a href="#" className="site-button circle-sm twitter">
                    <i className="fab fa-twitter" />
                  </a>
                </li>{" "}
                <li>
                  <a href="#" className="site-button circle-sm instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container clearfix">
            {/* website logo */}
            <div className="logo-header mostion logo-center">
              <Link href={`/`}>
                <img
                  className="logo1 logo-c"
                  alt=""
                  src="/images/logo-center-6.png"
                  width="184"
                  height="143"
                />
                <img
                  className="logo2"
                  alt=""
                  src="/images/logo-center-light.png"
                  width="184"
                  height="143"
                />
              </Link>
            </div>
            {/* nav toggle button */}
            <button
              className="navbar-toggler collapsed navicon justify-content-end"
              type="button"
              onClick={toggleMobileMenu}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            {/* main nav */}
            <div
              className="header-nav navbar-collapse collapse justify-content-between"
              id="navbarNavDropdown"
            >
              <div className="logo-header mostion">
                <Link href={`/`}>
                  <img
                    alt=""
                    src="/images/logo-6.png"
                    width="258"
                    height="75"
                  />
                </Link>
              </div>
              <Nav2 />
              <div className="dlab-social-icon">
                <ul>
                  {socialLinks.map((elm, i) => (
                    <React.Fragment key={i}>
                      <li>
                        <a
                          className={`site-button circle-sm outline  ${elm.className}`}
                          href={elm.href}
                        />
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main header END */}
    </header>
  );
}
