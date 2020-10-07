import React from "react";
import "./Imgs.css";

function TimeLineItem(props) {
  return (
    <div onClick={() => {
      props.setActiveImage(props.source)
    }}
    className = "timeline-item"
    >
      <h1>{props.title}</h1>

    </div>
  );
}

export default function ExperienceScreen() {
  const [activeImage, setActiveImage] = React.useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Me"
            source="https://cdn.discordapp.com/attachments/750111218944966676/763538210080292884/Wings.jpeg"
            setActiveImage={setActiveImage}
          ></TimeLineItem>
          <TimeLineItem 
            title="Also Me"
            source="https://cdn.discordapp.com/attachments/720920165075910727/763150204048244786/image0.jpg"
            setActiveImage={setActiveImage}
          ></TimeLineItem>
        </div>
        <div className="img">
          <img src={activeImage} width="400" height="450"/>
        </div>
      </div>
    </div>
  );
}
