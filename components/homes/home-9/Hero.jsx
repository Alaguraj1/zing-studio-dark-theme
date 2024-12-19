"use client";

import React from "react";

export default function Hero() {
  return (
    <div
      className="dlab-bnr-inr overlay-black-middle bg-pt cargo-banner"
      style={{ backgroundImage: "url(/images/main-slider/slide22.jpg)" }}
    >
      <div className="container">
        <div className="dlab-bnr-inr-entry text-white">
          <h1 className="title">
            The Biggest Contribution <br />
            Of Ship Industry To Humanity
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className="banner-form">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="form-group">
                  <select
                    className="form-select form-select-lg"
                    aria-label="Default select example"
                  >
                    <option>Transport</option>
                    <option>Air</option>
                    <option>Ocean</option>
                    <option>Road</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="form-group">
                  <select
                    className="form-select form-select-lg"
                    aria-label="Default select example"
                  >
                    <option>Country</option>
                    <option>United State</option>
                    <option>india</option>
                    <option>Brazil</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <div className="form-group">
                  <select
                    className="form-select  form-select-lg"
                    aria-label="Default select example"
                  >
                    <option>To Country</option>
                    <option>india</option>
                    <option>Brazil</option>
                    <option>United State</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="form-group">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <button className="site-button btnhover17 btn-block radius-no">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="bottom-link">
            <h4>
              <a href="#" className="text-white">
                Welcome To ship industry
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
