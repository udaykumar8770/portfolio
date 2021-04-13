import React from "react";
import profile from "./images/myprofile.jpg";
const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Uday kumar" },
    { id: 2, title: "Email:", text: "udaykumar8770@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 8556859922" },
    { id: 4, title: "Linkedin", text: "udaykumar8770" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={profile} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Hi! I am Uday Kumar, a web designer/developer focused on
                crafting great web experiences.
              </div>
              <div className="about__info-p2">
                Designing and Coding have been my passion since the days I
                started working with computers but I found myself into web
                design/development. I enjoy creating beautifully designed,
                intuitive and functional websites.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
