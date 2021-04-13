import React from "react";
import logo from "./images/logo.png";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";

const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <p className="portfolio_logo">ᴍʏ ᴘᴏʀᴛꜰᴏʟɪᴏ</p>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FormatAlignJustifyIcon />
      </div>
    </nav>
  );
};

export default Nav;
