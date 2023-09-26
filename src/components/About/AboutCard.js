import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Asifor Toritsemugbone </span>
            from <span className="purple"> Delta State but reside in Lagos, Nigeria.</span>
            <br /> I am a Process engineer that holds a Masters degree in Chemical engineering.
            <br />
            Also, I am currently transitioning into the tech space (frontend development) and I love being around kids.
            <br />
            <br />
            Apart from engineering and coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Treat people the way you want to be treated while you strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Torrie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
