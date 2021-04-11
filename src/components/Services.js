import React from "react";
import profile from "./images/profile.png";
import blog from "./images/blog.png";
import portfolio from "./images/portfolio.png";
import amazon from "./images/amazon.PNG";
import airline from "./images/airline.png";
import netflix from "./images/netflix.png";
import myweb from "./images/ab.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
// import {
//   FaGithub,
//   FaCamera,
//   FaCircleNotch,
//   FaApple,
//   FaFileVideo,
//   FaSearchDollar,
// } from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "Project",
    subHeading: "My Work",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting\
    industry. Lorem Ipsum standard dummy text.",
  });

  const [state] = React.useState([
    {
      id: 1,
      image: netflix,
      icon: <GitHubIcon className="commonIcons" />,
      heading: "Netflix Clone",
      text: "",
    },
    {
      id: 2,
      image: blog,
      icon: <GitHubIcon className="commonIcons" />,
      heading: "Blog Website",
    },
    {
      id: 3,
      image: airline,
      icon: <GitHubIcon className="commonIcons" />,
      heading: "Airlines Reservation",
    },
    {
      id: 4,
      image: amazon,
      icon: <GitHubIcon className="commonIcons" />,
      heading: "Amazon Clone",
    },
    {
      id: 5,
      icon: <GitHubIcon className="commonIcons" />,
      heading: "Portfolio Website",
      image: portfolio,
    },
    {
      id: 6,
      icon: <GitHubIcon className="commonIcons" />,
      heading: "My webapp",
      image: myweb,
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>

            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  <img src={info.image} alt="" />
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <div className="services_btn">
                    <button className="btn1">Live Demo</button>
                    <button className="btn1">View Source</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
