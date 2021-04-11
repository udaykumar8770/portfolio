import React from "react";
import profile from "./images/profile.png";
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
const Banner = () => {
  const [state] = React.useState({
    title: "I am Uday Kumar",
    text:
      "i,m Uday, professional web developer with long time \
    experience in this field​",
    image: profile,
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FacebookIcon className="headerIcon" />
                  </li>
                  <li>
                    <TwitterIcon className="headerIcon" />
                  </li>
                  <li>
                    <PinterestIcon className="headerIcon" />
                  </li>
                  <li>
                    <InstagramIcon className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn btn-smart">
                    <PlayArrowIcon className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
