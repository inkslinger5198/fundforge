import React from "react";
import "./Thesis.css";
import CTA from "../CTA/CTA";

const Thesis = () => {
  return (
    <div className="Thesis">
      <div className="container">
        <div className="heading">
          <h1>Our Thesis</h1>
        </div>
        <div className="thesis-containers">
          <div className="thesis-container">
            <div className="container-box">
              <div className="text">
                <h2>Tailoring Your Approach To Your Ideal Investor : </h2>
                <p>
                  Crafting a compelling investment proposition is crucial for
                  securing 7-8 figure investments. Having an irresistible
                  proposition that resonates with your ideal investors is key.
                  We specialize in refining your investment pitch to align with
                  your fund's ethos and appeal to potential investors.
                </p>
              </div>
              <CTA />
            </div>
          </div>
          <div className="thesis-container">
            <div className="container-box">
              <div className="text">
                <h2>Building Your Ideal Investor Profile:</h2>
                <p>
                  We assist in constructing your Ideal Investor Profile,
                  enabling you to pinpoint the right investors to engage and
                  those to sidestep. This customized approach not only broadens
                  your connection with high-potential investors but also reduces
                  wasted endeavors on unsuitable candidates.
                </p>
              </div>
              <CTA />
            </div>
          </div>
          <div className="thesis-container">
            <div className="container-box">
              <div className="text">
                <h2>Investor Engagement Infrastructure:</h2>
                <p>
                  We'll establish a comprehensive investor outreach framework
                  for you across various channels, designed to predictably
                  secure 7-15 high-quality interactions monthly on autopilot.
                  Utilizing proprietary tools and cutting-edge technology, we
                  facilitate these engagements, a strategy through which we've
                  arranged thousands of meetings for our partners.
                </p>
              </div>
              <CTA />
            </div>
          </div>
          <div className="thesis-container">
            <div className="container-box">
              <div className="text">
                <h2>Enhancing Investment Velocity</h2>
                <p>
                  As investor meetings start to come in, we'll assist in honing
                  your fundraising process, creating detailed engagement
                  sequences to qualify prospects. We'll also streamline your CRM
                  automation for seamless, efficient operations, all aimed at
                  increasing your investment velocity and accelerating fund
                  commitments.
                </p>
              </div>
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thesis;
