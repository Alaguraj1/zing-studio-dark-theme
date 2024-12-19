"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AboutUsLink,
  AcademyLink,
  blogItems,
  CareersLink,
  ContactLink,
  contactLinks,
  elementItems,
  ExpertsHubLink,
  headerAndFooters,
  homeItems,
  pagesItems,
  PortfolioLink,
  ServicesLink,
  shopLinks,
  ZingfluenceLink,
} from "@/data/menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (menuMain) => {
    let isActive = false;
    if (menuMain.href && menuMain.href !== "#") {
      if (pathname.split("/")[1] == menuMain.href?.split("/")[1]) {
        isActive = true;
      }
    }
    menuMain.length &&
      menuMain.forEach((menu) => {
        if (menu.href && menu.href !== "#") {
          if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (menu.links) {
          menu.links.forEach((el) => {
            if (el.href && el.href != "#") {
              if (pathname.split("/")[1] == el.href?.split("/")[1]) {
                isActive = true;
              }
            }
            if (el.links) {
              el.links.map((elm) => {
                if (elm.href && elm.href != "#") {
                  if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                    isActive = true;
                  }
                }
              });
            }
          });
        }
      });
    return isActive;
  };

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 991);
  const [menuOpen1, setMenuOpen1] = useState("");
  const [menuOpen2, setMenuOpen2] = useState("");

  // Function to handle resizing
  const handleResize = () => {
    // Update screen width state
    setIsLargeScreen(window.innerWidth > 991);

    // Update header height state
    const headerElement = document.querySelector(".header");
    if (headerElement) {
      const newHeight = headerElement.offsetHeight;
      setHeaderHeight(newHeight);
    }
  };

  useEffect(() => {
    // Call handleResize on component mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  // Calculate the height for the mega-menu if large screen
  const megaMenuHeight = isLargeScreen
    ? `calc(100vh - ${headerHeight}px)`
    : "auto";

  return (
    <>
      {/* <li
        className={` has-mega-menu homedemo ${
          menuOpen1 == "home" ? "open" : ""
        }  ${isMenuActive(homeItems) ? "active" : ""}`}
      >
        <a onClick={() => setMenuOpen1((pre) => (pre == "home" ? "" : "home"))}>
          Home
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="mega-menu" style={{ height: megaMenuHeight }}>
          {homeItems.map((item, index) => (
            <li key={index}>
              <Link
                className={isMenuActive(item) ? "menuActive" : ""}
                href={item.href}
              >
                <div className="image-new">
                  <Image alt="" src={item.src} width={350} height={420} />
                  {item.badge && <span className="badge">{item.badge}</span>}
                </div>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* <li
        className={` has-mega-menu homedemo  ${
          isMenuActive(homeItems) ? "active" : ""
        }`}
      >
        <Link href={`/`}>Home</Link>
      </li> */}
      {/* <li
        className={` ${isMenuActive(headerAndFooters) ? "active" : ""} ${
          menuOpen1 == "features" ? "open" : ""
        }  `}
      >
        <a
          onClick={() =>
            setMenuOpen1((pre) => (pre == "features" ? "" : "features"))
          }
        >
          Features
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="sub-menu tab-content">
          {headerAndFooters.map((item, index) => (
            <li
              key={index}
              className={` ${menuOpen2 == item.title ? "open" : ""}  `}
            >
              <a
                onClick={() =>
                  setMenuOpen2((pre) => (pre == item.title ? "" : item.title))
                }
                className={isMenuActive(item.links) ? "menuActive" : ""}
              >
                {item.title} <i className={item.iconClass} />
              </a>
              <ul className="sub-menu">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      className={isMenuActive(link) ? "menuActive" : ""}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}

      <li className={isMenuActive(AboutUsLink) ? "active" : ""}>
        <Link
          href={AboutUsLink.href}
          className={isMenuActive(AboutUsLink) ? "menuActive" : ""}
        >
          {AboutUsLink.label}
        </Link>
      </li>

      {/* <li
        className={`has-mega-menu  ${
          isMenuActive(pagesItems) ? "active" : ""
        } ${menuOpen1 == "pages" ? "open" : ""}  `}
      >
        <a
          onClick={() => setMenuOpen1((pre) => (pre == "pages" ? "" : "pages"))}
        >
          Pages
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="mega-menu">
          {pagesItems.map((item, index) => (
            <li key={index}>
              <a>{item.title}</a>
              <ul>
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      className={isMenuActive(link) ? "menuActive" : ""}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}
      {/* <li
        className={` ${isMenuActive(shopLinks) ? "active" : ""} ${
          menuOpen1 == "shop" ? "open" : ""
        }  `}
      >
        <a onClick={() => setMenuOpen1((pre) => (pre == "shop" ? "" : "shop"))}>
          Shop
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="sub-menu">
          {shopLinks.map((link, index) => (
            <li key={index}>
              <Link
                className={isMenuActive(link) ? "menuActive" : ""}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`has-mega-menu  ${isMenuActive(blogItems) ? "active" : ""} ${
          menuOpen1 == "blog" ? "open" : ""
        }  `}
      >
        <a onClick={() => setMenuOpen1((pre) => (pre == "blog" ? "" : "blog"))}>
          Blog
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="mega-menu">
          {blogItems.map((item, index) => (
            <li key={index}>
              <a>{item.title}</a>
              <ul>
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      className={isMenuActive(link) ? "menuActive" : ""}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`has-mega-menu  ${
          isMenuActive(elementItems) ? "active" : ""
        } ${menuOpen1 == "element" ? "open" : ""}  `}
      >
        <a
          onClick={() =>
            setMenuOpen1((pre) => (pre == "element" ? "" : "element"))
          }
        >
          Element
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="mega-menu">
          {elementItems.map((item, index) => (
            <li key={index}>
              <a>{item.title}</a>
              <ul>
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      className={isMenuActive(link) ? "menuActive" : ""}
                      href={link.href}
                    >
                      <i className={link.iconClass} /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}
      <li
        className={` ${isMenuActive(ServicesLink) ? "active" : ""} ${
          menuOpen1 == "services" ? "open" : ""
        }  `}
      >
        <a
          onClick={() =>
            setMenuOpen1((pre) => (pre == "services" ? "" : "services"))
          }
        >
          Services
          <i className="fas fa-chevron-down" />
        </a>
        <ul className="sub-menu right">
          {ServicesLink.map((link, index) => (
            <li key={index}>
              <Link
                className={isMenuActive(link) ? "menuActive" : ""}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className={isMenuActive(ZingfluenceLink) ? "active" : ""}>
        <Link
          href={ZingfluenceLink.href}
          className={isMenuActive(ZingfluenceLink) ? "menuActive" : ""}
        >
          {ZingfluenceLink.label}
        </Link>
      </li>

      <li className={isMenuActive(ExpertsHubLink) ? "active" : ""}>
        <Link
          href={ExpertsHubLink.href}
          className={isMenuActive(ExpertsHubLink) ? "menuActive" : ""}
        >
          {ExpertsHubLink.label}
        </Link>
      </li>

      <li className={isMenuActive(PortfolioLink) ? "active" : ""}>
        <Link
          href={PortfolioLink.href}
          className={isMenuActive(PortfolioLink) ? "menuActive" : ""}
        >
          {PortfolioLink.label}
        </Link>
      </li>

      <li className={isMenuActive(AcademyLink) ? "active" : ""}>
        <Link
          href={AcademyLink.href}
          className={isMenuActive(AcademyLink) ? "menuActive" : ""}
        >
          {AcademyLink.label}
        </Link>
      </li>
      <li className={isMenuActive(CareersLink) ? "active" : ""}>
        <Link
          href={CareersLink.href}
          className={isMenuActive(CareersLink) ? "menuActive" : ""}
        >
          {CareersLink.label}
        </Link>
      </li>
      <li className={isMenuActive(ContactLink) ? "active" : ""}>
        <Link
          href={ContactLink.href}
          className={isMenuActive(ContactLink) ? "menuActive" : ""}
        >
          {ContactLink.label}
        </Link>
      </li>

      {/* <li>
        <Link
          href={`/contact-2`}
          className={`has-mega-menu ${menuOpen1 == "pages" ? "open" : ""}  `}
        >
          Contact
        </Link>
      </li> */}
    </>
  );
}
