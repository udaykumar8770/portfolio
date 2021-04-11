import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaPinterest,
//   FaInstagram,
//   FaPlay,
// } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                {/* <img src="/images/logo.png" alt="" /> */}
                <h1 style={{ color: "white" }}>Contact Me</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exe- rcitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="contactCircles">
                <li>
                  <FacebookIcon className="contactIcon" />
                </li>
                <li>
                  <TwitterIcon className="contactIcon" />
                </li>
                <li>
                  <PinterestIcon className="contactIcon" />
                </li>
                <li>
                  <InstagramIcon className="contactIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
