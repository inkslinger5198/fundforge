import React from "react";
import "./About.css";
import CTA from "../CTA/CTA";

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="about-container">
          <div className="container-box">
            <div className="text">
              <p>
                At Fund Forge, we specialize in elevating the fund-raising
                capabilities of venture capital firms by facilitating
                connections with the right Limited Partners (LPs). With our
                extensive background in diverse sectors like SaaS, Venture
                Capital, Digital Transformation, Defense, and Pharma, we bring a
                rich perspective to the capital markets.
                <br /> <br />
                Entering 2024, our goal is to expand our reach within the
                private markets, focusing on assisting venture capital firms in
                securing essential capital for their funds from a global network
                of investors. Our strategy is grounded in establishing direct
                engagement with over 100 potential LPs on a daily basis.
                <br />
                <br />
                Our seasoned backend team plays a pivotal role, diligently
                ensuring a strategic fit between the investment preferences of
                LPs and the unique value propositions of your fund. By arranging
                targeted meetings with qualified LPs directly onto your
                calendar, Fund Forge streamlines the fundraising process for
                venture capital firms, facilitating efficient and successful
                capital acquisition.
              </p>
            </div>
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
