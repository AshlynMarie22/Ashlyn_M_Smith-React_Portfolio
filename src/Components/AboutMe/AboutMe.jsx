import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
    <div className="maindiv">
    <img
            className="center row circle"
            src="https://ashlynimages.s3.us-east-2.amazonaws.com/Untitled.png"
            alt="Ashlyn Smith"
            // style="border-radius: 50%"
          />
      <div className="center row aboutMe" >
      
        <div className="col-12">
          <img
            className="img img-aboutme"
            src="https://ashlynimages.s3.us-east-2.amazonaws.com/profile+picture.png"
            alt="Ashlyn Smith"
            // style="border-radius: 50%"
          />
          <p>
            I am an aspiring Full Stack Web Developer who graduated from the
            Certificate Program at Georgia Tech. Skilled in HTML, JavaScript,
            node and react. Some of my strengths include teamwork, creativity,
            and being calm under pressure. I have a passion for continuous
            learning, working until I solve whatever problem I am working on,
            and taking full advantage of Google. One of my work mottos is
            working smarter, not harder. I love to find and create simplified
            solutions.
          </p>
          <p>
            In 2011 I graduated from Georgia State University with a Bachelor of
            Business Adminstartion. After graduation I continued working in the
            Event Industry managing venues, planning meetings and incentives,
            and helping make my clients visions come to life while exceeding
            expectations. Over my career in the Event Industry I always
            gravitated and excelled with the technology. I have worked on
            countless registration websites to create a user friendly and
            informative site to inform attendees and capture their information.
            Most recently I was in charge of the mobile apps for our incentive
            clients. We created the event apps to be informative while adding
            gamifcation to ensure attendee engagement.
          </p>
          <p>
            I am looking forward to using my past experiences and skills in my
            new career.
          </p>
        </div>
      
      <div className="row">
        <div className="col-3"></div>
        <div className="col-2">
          <a href="https://www.linkedin.com/in/ashlynmsmith2/" target="https://www.linkedin.com/in/ashlynmsmith2/">
            <i
              className="fab fa-linkedin fa-2x"
              // style="color: #7d6d61"
            ></i>
          </a>
        </div>
        <div className="col-2">
          <a
            href="https://ashlynimages.s3.us-east-2.amazonaws.com/Ashlyn+M+Smith+Resume.pdf"
            target="https://ashlynimages.s3.us-east-2.amazonaws.com/Ashlyn+M+Smith+Resume.pdf"
          >
            <i
              className="far fa-file-pdf fa-2x"
              // style="color: #7d6d61"
            >
              {" "}
            </i>
          </a>
        </div>
        <div className="col-2">
          <a href="https://github.com/AshlynMarie22" target="https://github.com/AshlynMarie22">
            <i
              className="fab fa-github fa-2x"
              // style="color: #7d6d61"
            ></i>
          </a>
        </div>
        <div className="col-3"></div>
      </div>
      </div>
      </div>
    </>
  );
};

export default AboutMe;
