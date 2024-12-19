import { foodItems } from "@/data/foodItems";
import React from "react";
import Image from "next/image";
export default function FoodItem() {
  return (
    <div className="section-full bg-primary content-inner">
      <div className="container">
        <div className="row">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className={item.classes}
              data-wow-duration={item.dataWowDuration}
              data-wow-delay={item.dataWowDelay}
            >
              <div className="icon-bx-wraper sr-iconbox1">
                <div className="icon-lg m-b20 icon-up">
                  <a className="icon-cell">
                    <Image
                      src={item.imgSrc}
                      width={70}
                      height={70}
                      alt={item.title}
                    />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
