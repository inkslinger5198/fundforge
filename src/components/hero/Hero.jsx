import React, { useState, useEffect } from "react";
import "./hero.css";
import { CTA } from "../../components";
// import img from "../../../../assets/Logo.png";

class TxtRotate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "",
      isDeleting: false,
      loopNum: 0,
    };
    this.period = parseInt(props.period, 10) || 2000;
    this.toRotate = props.toRotate;
  }

  componentDidMount() {
    this.tick();
  }

  tick = () => {
    let { loopNum, txt, isDeleting } = this.state;
    const fullTxt = this.toRotate[loopNum % this.toRotate.length];

    let delta = 200 - Math.random() * 100;

    if (!isDeleting) {
      // Typing logic
      this.setState({ txt: fullTxt.substring(0, txt.length + 1) });
      if (txt === fullTxt) {
        // Prepare to delete
        delta = this.period;
        this.setState({ isDeleting: true });
      }
    } else {
      // Deleting logic
      this.setState({ txt: txt.substring(0, txt.length - 1) });
      if (txt === "") {
        // Finished deleting, move to next text
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1,
        });
      }
    }

    setTimeout(this.tick, delta);
  };

  render() {
    return (
      <span className="wrap blue txt-rotate sog_hero-dynamic-text">
        {this.state.txt}
      </span>
    );
  }
}

const Hero = () => {
  const [screenSize, setScreenSize] = useState({
    isSmallScreen: window.innerWidth <= 768,
    isSmallerScreen: window.innerWidth <= 430,
  });

  useEffect(() => {
    const handleResize = () => {
      // Update both states based on the current window width
      setScreenSize({
        isSmallScreen: window.innerWidth <= 768,
        isSmallerScreen: window.innerWidth <= 430,
      });
    };
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Hero section__padding" id="home">
      <div className="background-gradient">
        <div className="background-gradient_blue"></div>
        <div className="background-gradient_blue2"></div>
      </div>

      
      {/* <div className="background-cont">
        <div className="background">
          <img src={img} alt="img" />
        </div>
      </div> */}

      <div className="hero-title">
        <h3>Looking to Raise Capital for your VC Fund?</h3>
        <h1>
          Find your next {""} {screenSize.isSmallScreen && <br />}
          <TxtRotate
            toRotate={[
              "Family Office",
              "Institutional Investor",
              "High Net Worth Individual",
            ]}
            period={2000}
          />
        </h1>
        <p>
          Gain Direct Access to Global Capital by Connecting with More Than 10
          Million Investors
        </p>
      </div>
      {/*<div className="hero-vsl">
        <iframe
          src="https://www.youtube.com/embed/oPWaOwlmfQQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>*/}
      <CTA className="hero-btn" />
      {/* <Learn_More /> */}
    </div>
  );
};

export default Hero;
