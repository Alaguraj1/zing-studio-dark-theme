"use client";

import React from "react";
import Nav from "./component/Nav";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socials";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
export default function Header17() {
  return (
    <header className="site-header mo-left header">
      {/* main header */}
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix dz-header">
          <div className="container-fluid clearfix">
            {/* website logo */}
            <div className="logo-header mostion logo-dark">
              <Link href={`/`}>
                <img alt="" src="/images/logo.png" width="258" height="75" />
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
            {/* extra nav */}
            {/* <div className="extra-nav border-0">
              <div className="extra-cell">
              <button id="quik-search-btn" type="button" className="site-button-link"><i className="la la-search"></i></button>
              </div>
              <div className="extra-cell d-flex align-items-center gap-5 gap-xl-3 d-none d-lg-flex">
                <a href="#" style={{ color: "#253445" }}>
                  {" "}
                  Sign Up{" "}
                </a>
                <button
                  className="button dz-bannerbtn bg-primary"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </div> */}
            {/* Quik search */}

            {/* main nav */}
            <div
              className="header-nav navbar-collapse collapse justify-content-around"
              id="navbarNavDropdown"
            >
              <div className="logo-header d-md-block d-lg-none">
                <Link href={`/`}>
                  <img alt="" src="/images/logo.png" width="258" height="75" />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <Nav />
              </ul>
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
