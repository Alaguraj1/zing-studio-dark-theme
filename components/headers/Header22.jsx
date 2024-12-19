"use client";

import React, { useEffect, useRef, useState } from "react";
import Nav from "./component/Nav";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
import { headerLinks } from "@/data/headerLinks";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import { useContextElement } from "@/context/Context";
import { usePathname } from "next/navigation";
export default function Header22() {
  const pathname = usePathname();
  const [isDDOpen, setIsDDOpen] = useState(false);
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        setIsDDOpen(false);
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setIsDDOpen(false);
  }, [pathname]);

  return (
    <header className="site-header mo-left header">
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="dlab-topbar-left">
              <ul>
                {headerLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dlab-topbar-right">
              <Link
                href={`/contact-1`}
                className="site-button radius-no btnhover13"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* main header */}
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container clearfix">
            {/* website logo */}
            <div className="logo-header mostion logo-dark">
              <Link href={`/`}>
                <img alt="" width="258" height="75" src="/images/logo.png" />
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
            <div className="extra-nav">
              <div className="extra-cell">
                <button
                  id="quik-search-btn"
                  type="button"
                  className="site-button-link"
                >
                  <i className="la la-search" />
                </button>
                <div className="shop-cart navbar-right" ref={elementRef}>
                  <button
                    type="button"
                    onClick={() => setIsDDOpen((pre) => !pre)}
                    className="site-button-link cart-btn"
                  >
                    <i className="la la-cart-plus" />
                    <span className="badge bg-primary">
                      {cartProducts.length}
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu cart-list"
                    style={
                      isDDOpen
                        ? {
                            display: "block",
                            opacity: "1",
                            visibility: "visible",
                            transition: "0.4s",
                          }
                        : {
                            display: "block",
                            opacity: "0",
                            visibility: "hidden",
                            transition: "0.4s",
                          }
                    }
                  >
                    {cartProducts.length ? (
                      <>
                        {cartProducts.map((elm, i) => (
                          <li key={i} className="cart-item">
                            <div className="media">
                              <div className="media-left">
                                <Link
                                  href={`/shop-product-details/${elm.title}`}
                                >
                                  <Image
                                    alt=""
                                    className="media-object"
                                    src={elm.imgSrc}
                                    width="150"
                                    height="150"
                                  />
                                </Link>
                              </div>
                              <div className="media-body">
                                <h6>
                                  <Link
                                    href={`/shop-product-details/${elm.title}`}
                                    className="media-heading"
                                  >
                                    {elm.title} x {elm.quantity}
                                  </Link>
                                </h6>
                                <span>
                                  ${" "}
                                  {(elm.discountedPrice * elm.quantity).toFixed(
                                    2
                                  )}
                                </span>
                                <span
                                  onClick={() => removeItem(elm.id)}
                                  className="item-close"
                                >
                                  X
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </>
                    ) : (
                      <div className="row mb-5 gap-3 align-items-center p-4">
                        <div className="col-5">Your cart is empty</div>
                        <div className="col-5">
                          <Link href={"/shop"}>
                            <button className="site-button" type="button">
                              Shop Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}

                    <li className="cart-item text-center">
                      <h5 className="text-black m-a0">Totle = ${totalPrice}</h5>
                    </li>
                    <li className="text-center row">
                      <Link href={"/shop-cart"} className="col-6">
                        <button className="site-button radius-xl m-r5">
                          View Cart
                        </button>
                      </Link>{" "}
                      <Link href={"/shop-checkout"} className="col-6">
                        <button className="site-button radius-xl outline black">
                          Checkout
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Quik search */}

            {/* main nav */}
            <div
              className="header-nav navbar-collapse collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <div className="logo-header d-md-block d-lg-none">
                <Link href={`/`}>
                  <img alt="" width="258" height="75" src="/images/logo.png" />
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
                          className={`site-button circle-sm outline ${elm.className} `}
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
