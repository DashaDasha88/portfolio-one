import React from 'react';
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <div className="container">
        <div className="item">
          <img
          src="assets/portfolioexample.png"
          alt=""
          />
          <h3>Project Name</h3>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img
          src="assets/portfolioexample.png"
          alt=""
          />
          <h3>Project Name</h3>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img
          src="assets/portfolioexample.png"
          alt=""
          />
          <h3>Project Name</h3>
        </div>
      </div>

    </div>
  );
}
