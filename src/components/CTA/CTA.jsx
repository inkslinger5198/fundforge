import React from "react";
import "./cta.css";
import { calendlyLink } from "../../constants";

const CTA = () => {
  return (
    <div className="CTA">
      <div className="button__cta">
        <a
          href={calendlyLink}
          target="_blank"
          rel="noreferrer"
        >
          <button className="cta">Book a Call</button>
        </a>
      </div>
    </div>
  );
};

export default CTA;
