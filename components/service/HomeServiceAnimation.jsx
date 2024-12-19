"use client";
import { useState, useRef, useEffect } from "react";
import Card from "./ServiceCardAnimation";

const projects = [
  {
    id: 1,
    title: "Web Design",
    description:
      "At Zing Studio we design websites with your customer in mind, because modern web design is more than just about creating a visually stunning site.",
    price:"45,000",
    src: "images/Home-Page/web-design.jpg",
    link: "/web-design",
    color: " #1a43bf",
    animation_delay: "0.3s",
  },
  {
    id: 2,
    title: "E-Commerce",
    description:
      "The modern consumer of today looks for a simple and intuitive online shopping experience that responds to their needs. At Zing Studio, our dynamic team...",
      price:"85,000",
    src: "images/Home-Page/ecommerce.jpg",
    link: "/e-commerce",
    color: "#1a1a1a",
    animation_delay: "0.6s",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...",
      price:"65,000",
    src: "images/Home-Page/digital-marketing.jpg",
    link: "/digital-marketing",
    color: " #1a43bf",
    animation_delay: "0.9s",
  },
  {
    id: 4,
    title: "E-Commerce Management",
    description:
      "It can be overwhelming for most businesses to manage inventory, process orders and address customer queries. At Zing Studio, we provide simplified...",
      price:"75,000",
    src: "images/Home-Page/ecommerce-managment.jpg",
    link: "/e-commerce-management",
    color: "#1a1a1a",
    animation_delay: "0.12s",
  },
];

export default function HomeServiceAnimation() {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  // Create the IntersectionObserver to detect when each card enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the card ID from the data-id attribute of the element
            setActiveCard(entry.target.getAttribute("data-id"));
          }
        });
      },
      {
        threshold: 0.5, // Trigger when at least 50% of the card is in view
      }
    );

    cardRefs.current.forEach((card) => {
      observer.observe(card); // Observe each card element
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {" "}
      <div className="section-head style2 text-center pt-5 mb-3 homeservice-heading">
        <h2 className="title m-b10">Our Services</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>{" "}
      {/* <div
        style={{
          backgroundImage: "url(/images/element-5.png)",
          backgroundRepeat: "no-repeat",
        }}
      > */}
        <main className="main container">
          {" "}
          {projects.map((project, i) => (
            <Card
              key={project.id}
              {...project}
              i={i}
              activeCard={activeCard}
              cardRef={(el) => (cardRefs.current[i] = el)}
            />
          ))}
        </main>
      {/* </div> */}
    </>
  );
}
