import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Sparsh Goel</b> and I am from New Delhi, India.
            I'm a{" "}
            <b>MERN stack web developer and Aspiring Software Developer</b> and
            a final year college student pursuing <b>BTech in CSE</b>. <br />
            <br />I have done an internship as a <b>Frontend Developer</b> at
            AthLead which is a AI driven coaching startup. I love to create
            original projects with beautiful designs, you can check out some of
            my work in the projects section.
            <br />
            <br />
            Let's connect, collaborate, and embark on a journey of creativity
            and innovation together!
            <a
              href="https://www.linkedin.com/in/sparsh-goel-3113831b7/"
              target="_blank"
            >
              Linkedin
            </a>
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />

        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
