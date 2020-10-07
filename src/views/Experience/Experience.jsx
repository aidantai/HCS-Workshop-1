import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div onClick={() => {
      props.setActiveTitle(props.title)
      props.setActiveDescription(props.description)
    }}
    className = "timeline-item"
    >
      <h1>{props.title}</h1>

    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("Click one of the boxes on the left!");
  const [activeDescription, setActiveDescription] = React.useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="FIRST Robotics"
            setActiveTitle={setActiveTitle}
            description="Programmer for my FRC Team in High School. Coded in Java."
            setActiveDescription={setActiveDescription}
          ></TimeLineItem>
          <TimeLineItem 
            title="AP Compsci"
            setActiveTitle={setActiveTitle}
            description="Took AP Computer Science A. More Java. Yeah."
            setActiveDescription={setActiveDescription}
          ></TimeLineItem>
          <TimeLineItem 
            title="Online Courses"
            setActiveTitle={setActiveTitle}
            description="Learned some other languages maybe (Python, Javascript, C++)"
            setActiveDescription={setActiveDescription}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
