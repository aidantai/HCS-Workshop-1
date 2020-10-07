import React from "react";
import "./About.css";
import thatonepicofwingsbythecoopthateveryonetakesandpostsoninstagram from "../../assets/wings.jpeg";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={thatonepicofwingsbythecoopthateveryonetakesandpostsoninstagram} className="intro-picture"/>
        </div>
        <div className="intro-item">
          <h1>This is Aidan Tai.</h1>
          I'm from the Bay Area in California and am planning on concentrating in Computer Science. 
          I have experience with Java, Python, C/C++, and Javascript.
        </div>
      </div>
    </div>
  );
}
