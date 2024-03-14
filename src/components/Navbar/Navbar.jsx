import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <Link to="home" smooth={true} duration={100} offset={-90}>
      Home
    </Link>
    <Link to="services" smooth={true} duration={100} offset={-80}>
      Services
    </Link>
    <Link to="industries" smooth={true} duration={100} offset={-80}>
      Industries
    </Link>
    <Link to="wins" smooth={true} duration={100} offset={-80}>
      Wins
    </Link>
    <Link to="contact" smooth={true} duration={100} offset={-100}>
      Contact
    </Link>
    <Link to="about" smooth={true} duration={100} offset={-90}>
      About
    </Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-phone">
        {toggleMenu ? (
            <div className="opacity">
            
              <div className="navbar-phone-container ">
                <div className="navbar-phone-links">
                  <RiCloseLine
                    className="close-menu"
                    color="var(--high)"
                    size={27}
                    onClick={() => setToggleMenu(false)}
                  />
                  <Menu />
                  <div className="navbar-phone-buttons">
                    <a href="#">
                      <button className="phone-cta">Login</button>
                    </a>

                    {/*<button className="cta">
                        <a href="#">Sign Up</a>
                      </button>*/}
                  </div>
              </div>
            </div>
          </div>
        ) : (
          <RiMenu2Line
            className="open-menu"
            color="var(--low)"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>

      <div className="navbar-logo">
        <h1>FundForge.</h1>
      </div>

      <div className="navbar-links">
        <div className="navbar-laptop">
          <Menu />
        </div>
      </div>

      <div className="navbar-buttons">
        <a href="#">
          <button className="cta">Book A Call</button>
        </a>

        {/*<button className="cta">
          <a href="#">Sign Up</a>
  </button>*/}
      </div>
    </div>
  );
};

export default Navbar;
