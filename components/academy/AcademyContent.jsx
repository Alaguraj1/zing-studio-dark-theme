import React from "react";
import Image from "next/image";
export default function AcademyContent() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-b30">
            <div className="our-story">
              <h2 className="title">
                <span className="text-primary"> Academy </span>
              </h2>
              <h4 className="title">
                {" "}
                At Zing Studio, we are committed to empowering the next
                generation of digital experts through our immersive training
                programs.
              </h4>
            </div>

            <p>
              Our courses are meticulously designed to equip you with
              cutting-edge skills and knowledge, ensuring that you can grow and
              thrive in your career.
            </p>
            <div className="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-user" />
                  <strong>CLIENT</strong> Martin Stewart
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-location-pin" />
                  <strong>LOCATION</strong>London, UK
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-ruler-alt-2" />
                  <strong>SIZE</strong>1,200m<sup>2</sup>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                <div className="pro-details">
                  <i className="ti ti-home" />
                  <strong>TYPE</strong>Residential Project
                </div>
              </div>
            </div>
            <h4 className="text-black font-weight-600 m-b15">
              3 Months On-Job Training
            </h4>
            <p>
              Acquire real-world experience by developing campaigns, optimizing
              websites, and creating engaging social media content under the
              guidance of expert mentors.
            </p>

            <h4 className="text-black font-weight-600 m-b15">
              3 Months Paid Internship (Optional)
            </h4>
            <p className="m-b10">
              Fine-tune your digital skills and gain valuable industry
              experience
            </p>
            <p className="font-weight-600">
              Join us and take the leap toward your successful future!
            </p>

            <h4 className="text-black font-weight-600 m-b15">Courses</h4>
            {/* <p>
              Acquire real-world experience by developing campaigns, optimizing
              websites, and creating engaging social media content under the
              guidance of expert mentors.
            </p> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-factory" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Digital Marketing</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-settings" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">SEO</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-worker" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">SMM</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/Academy/img-1.jpg"
                  width="1000"
                  height="674"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/Academy/img-2.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/Academy/img-3.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/Academy/img-4.jpg"
                  width="700"
                  height="479"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
