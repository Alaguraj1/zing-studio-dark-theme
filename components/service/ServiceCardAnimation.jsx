"use client";

import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  description,
  src,
  link,
  color,
  i,
  activeCard,
  cardRef,  animation_delay
}) => {
  const isActive = activeCard === `${i + 1}`;
  return (
    <div
      className={`cardContainer `}
      ref={cardRef}
      data-id={i + 1} // Set the ID to match the index for comparison
    >
      <div
        className="card dlab-box no-hover wow fadeInUp fly-box-ho"
        // data-wow-delay={animation_delay}
        style={{
          backgroundColor: color,
          width: `calc(80% + ${i * 5}%)`, // Combine both the active and calculated widths          // isActive && activeCard === `${i + 1}` // Active card width 100%
          //   ? "100%"
          //   : activeCard === `${i}` // Previous card (one step before active) width 95%
          //   ? "95%"
          //   : activeCard === `${i - 1}` // Previous card (two steps before active) width 90%
          //   ? "90%"
          //   : "95%", // Default width for inactive cards
          transition: "width 0.3s ease", // Smooth transition for width change
          transition: "transform 0.3s ease, width 0.3s ease", // Add transition for both scale and width
          top: `calc(-5vh + ${i * 25}px)`, // Adjust the top position based on the index
        }}
      >
        <div
          className="body service-box row"
          style={{
            color: "white",
            justifyContent: "space-between",
            margin: "0px",
          }}
        >
          <div
            className="description col-md-6 col-sm-12 col-12"
            style={{ paddingLeft: "30px" }}
          >
            <h2 style={{ color: "white" }}>{title}</h2>
            <p>{description}</p>

            <Link
              href={link}
              className="site-button outline white outline-2 btnhover11"
            >
              Read More
            </Link>
          </div>

          <div className="imageContainer col-md-6 col-sm-12 col-12">
            <div className="inner">
              <Image fill src={`/${src}`} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
