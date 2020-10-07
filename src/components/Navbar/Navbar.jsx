import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Aidan Tai</h1>
        <div className="info-bar">
          <p className="info-item">aidantai@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            className="info-link"
            to={{ pathname: "https://github.com/aidantai" }}
            target="_blank"
          >
            Github
          </Link>
          <Link 
            className="info-link"
            to={{ pathname: "https://open.spotify.com/user/mrmanbob?si=gCwyfOXJQKSugoM2TzT9Ag" }}
            target="_blank"
          >
            Spotify
          </Link>
          <Link 
            className="info-link"
            to={{ pathname: "https://www.instagram.com/aidan_tie/" }}
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link className = "nav-link" to={{ pathname: "/about"}}>About</Link> 
        <Link className = "nav-link" to={{ pathname: "/experience"}}>Experience</Link> 
        <Link className = "nav-link" to={{ pathname: "/projects"}}>Projects</Link> 
        <Link className = "nav-link" to={{ pathname: "/hobbies"}}>Hobbies</Link> 
        <Link className = "nav-link" to={{ pathname: "/imgs"}}>Images</Link> 
      </div>
    </>
  );
}
