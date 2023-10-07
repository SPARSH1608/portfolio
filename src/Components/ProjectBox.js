import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TeslaCloneDesc:
      "Created a Tesla clone using React, Redux, Styled Components, and Material-UI, resulting in 15% more user interactions due to improved UI/UX.",
    TeslaCloneGithub: "",
    TeslaCloneWebsite: "https://devanshsahni.github.io/tindog/",

    CoachPointDesc:
      "During my frontend developer internship, our team created CoachPoint, an AI-driven coaching website using React, Redux, Firebase, and custom hooks",
    CoachPointGithub: "",
    CoachPointWebsite: "https://devanshsahni.github.io/Rog-Free/",

    ArticleSummarizerDesc:
      "Developed a web-based article summarizer application using React and Redux Toolkit, reducing the time required for summarization by 50%.",
    ArticleSummarizerGithub: "",
    ArticleSummarizerWebsite: "https://rainbow-tulumba-9f9077.netlify.app/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
