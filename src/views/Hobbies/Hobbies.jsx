import React from "react";
import "./Hobbies.css";

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
            title="Music"
            setActiveTitle={setActiveTitle}
            description="I play Alto Sax, Piano, and a bit of Guitar. I really enjoy music, though I'm not the best at it."
            setActiveDescription={setActiveDescription}
          ></TimeLineItem>
          <TimeLineItem 
            title="Coding"
            setActiveTitle={setActiveTitle}
            description="Another hobby of mine. An example would be comping for HCS! :)"
            setActiveDescription={setActiveDescription}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
