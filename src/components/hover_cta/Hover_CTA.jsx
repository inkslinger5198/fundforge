import React from "react";
import "./hover_cta.css";
import { IoMdMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";

import { calendlyLink } from "../../constants";

const Hover_CTA = () => {
  return (
    <div className="hover_cta" id="hovercta">
      <div className="hover_cta__container">
        <div className="hover_cta__container__icon">
          <LuPhoneCall />
        </div>
        <a href={calendlyLink} target="_blank" rel="noreferrer">
          <div className="hover_cta__container__text">
            <div className="hover_cta__hover">
              <h2>Ready to dive deeper?</h2>
              <h3>Book A Call</h3>
            </div>
            <p>
              Let's schedule a call to discuss how we can secure funding
              for your company.
            </p>
          </div>
        </a>
      </div>

      <div className="hover_cta__container">
        <div className="hover_cta__container__icon">
          <IoMdMail />
        </div>
        <a
          href="mailto:conor@standarddemand.io"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover_cta__container__text">
            <div className="hover_cta__hover">
              <h2>How can we help you?</h2>
              <h3>Send us an email</h3>
            </div>
            <p>
              If you have any concerns or questions, feel free to reach out to
              us.
            </p>
          </div>
        </a>
      </div>

      <div className="hover_cta__container">
        <div className="hover_cta__container__icon">
          <TiSocialLinkedin />
        </div>
        <a
          href="https://www.linkedin.com/company/standard-demand-partners/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover_cta__container__text">
            <div className="hover_cta__hover">
              <h2>Connect with us on LinkedIn</h2>
              <h3>Follow us</h3>
            </div>
            <p>Stay up to date with our latest news and updates.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hover_CTA;
