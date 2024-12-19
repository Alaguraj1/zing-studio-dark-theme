import React from "react";
import Image from "next/image";
export default function LinkedInMarketingDetails() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-b30">
            <div className="our-story">
              <h2 className="title">
                LinkedIn <span className="text-primary"> Marketing </span>
              </h2>
              <h4 className="title">
                At Zing Studio, we specialize in providing creative LinkedIn
                marketing services that elevate your business profile into a
                dynamic hub to attract professionals and spark meaningful
                conversations.
              </h4>
            </div>
            <p>
              Our team excels in crafting compelling narratives that resonate
              truly with your intended audience, with the aim to strengthen your
              brand’s presence, expand your professional network, and drive
              meaningful growth.
            </p>
            <p>
              By positioning your brand as a trusted authority in your niche, we
              cultivate trust and loyalty through strategic content creation,
              which includes thought leadership articles, engaging posts and
              insightful videos. Beyond traditional advertising strategies, we
              take advantage of the networking opportunities on the platform to
              nurture genuine connections, create valuable business
              partnerships, attract top-tier talent and drive organic growth. We
              design customized strategies that align with your business
              objectives, ensuring that each campaign reaches the right people
              at the right time. Amplify your online visibility, strengthen your
              professional relationships, and unlock endless opportunities for
              success.
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
            <h2 className="text-black font-weight-600 m-b15">Scoope Of Work</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the when an printer took a galley of type and scrambled
              it to make.
            </p>
            <div className="row">
              <div className="col-lg-12">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                      <i className="flaticon-factory" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Material Engineering</h5>
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
                    <h5 className="dlab-tilte">Chemical Research</h5>
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
                    <h5 className="dlab-tilte">Petroleum Engineering</h5>
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
                  src="/images/services/linkedIn-marketing/img-1.jpg"
                  width="1000"
                  height="674"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/services/linkedIn-marketing/img-2.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/services/linkedIn-marketing/img-3.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/services/linkedIn-marketing/img-4.jpg"
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
