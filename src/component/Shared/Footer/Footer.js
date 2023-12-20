import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
        position: " left top center",
      }}
      className="p-10"
    >
      <div className="footer" style={{ placeItems: "center" }}>
        <div>
          <span className="footer-title">Services</span>
          <Link to="home" className="link link-hover">
            Design
          </Link>
          <Link to="home" className="link link-hover">
            Marketing
          </Link>
          <Link to="home" className="link link-hover">
            Branding
          </Link>
          <Link to="home" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="home" className="link link-hover">
            About us
          </Link>
          <Link to="home" className="link link-hover">
            Contact
          </Link>
          <Link to="home" className="link link-hover">
            Jobs
          </Link>
          <Link to="home" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="home" className="link link-hover">
            Terms of use
          </Link>
          <Link to="home" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="home" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="mt-10 mb-5 text-center">
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
