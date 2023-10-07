import React from "react";
import ProjectBox from "./ProjectBox";

import tesla from "../images/tesla.png";
import coach from "../images/coach.png";
import article from "../images/article.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={tesla} projectName="TeslaClone" />
        <ProjectBox projectPhoto={coach} projectName="CoachPoint" />
        <ProjectBox projectPhoto={article} projectName="ArticleSummarizer" />
      </div>
    </div>
  );
};

export default Projects;
