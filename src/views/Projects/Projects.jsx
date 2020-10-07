import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="Monte Carlo Localization"
        description="Implemented Thrun's Monte Carlo localization in Java, no SLAM libaries used."
        link="https://github.com/aidantai/Monte-Carlo-Localization"
      ></Project>
      <Project
        title="Physics-Calculator"
        description="Made a kinematic physics calculator that uses a binary expression tree."
        link="https://github.com/aidantai/Physics-Calculator"
      ></Project>
    </div>
  );
}
