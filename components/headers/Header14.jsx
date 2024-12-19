"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { onepageNavItems } from "@/data/menu";
import addScrollspy from "@/utlis/addScrollSpy";
import Image from "next/image";
export default function Header14() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", addScrollspy);

    return () => {
      window.removeEventListener("scroll", addScrollspy);
    };
  }, []);
  return (
    <header className="site-header mo-left header-full header header-transparent header-sidenav onepage white">
      {/* main header */}
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container-fluid p-r0">
            <div className="header-content-bx">
              {/* website logo */}
              <div className="logo-header logo-white">
                <Link href={`/`}>
                  <img
                    alt=""
                    src="/images/logo-white-2.png"
                    width="258"
                    height="75"
                  />
                </Link>
              </div>
              <div className="extra-nav">
                <div className="extra-cell">
                  <ul>
                    <li className="search-btn">
                      <a
                        onClick={() => setIsOpenNav(true)}
                        className="menu-icon"
                      >
                        <div className="menu-icon-in">
                          <span />
                          <span />
                          <span />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`header-nav navbar-collapse collapse full-sidenav navbar ${
          isOpenNav ? "active" : ""
        }`}
      >
        <div className="logo-header logo-dark">
          <Link href={`/`}>
            <img alt="" src="/images/logo-2.png" width="258" height="75" />
          </Link>
        </div>
        <ul className="nav navbar-nav scrollSpyLinks">
          {onepageNavItems.map((item, index) => (
            <li key={index}>
              <a
                onClick={() => setIsOpenNav(false)}
                href={item.href}
                className={`scroll nav-link ${index == 0 ? "active" : ""}`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="social-menu">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
          </ul>
          <p className="copyright-head">
            © {new Date().getFullYear()} Industry
          </p>
        </div>
      </div>
      <div
        onClick={() => setIsOpenNav(false)}
        className={`menu-close  ${isOpenNav ? "active" : ""}`}
      >
        <i className="ti-close" />
      </div>
      {/* main header END */}
    </header>
  );
}
