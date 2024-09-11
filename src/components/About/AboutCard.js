import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adam Maatouk</span>
            from <span className="purple"> Montreal, Canada.</span>
            <br />
            I am currently studying in my last year of computer science at College Maisonneuve.
            <br />
            If I put my mind to something, I always make sure that the outcome leaves an <span className="purple">IMPACT.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Going To The Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography & Videography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "How Big Would You Dream, If You Knew You Couldn't Fail?"{" "}
          </p>
          <footer className="blockquote-footer">From A Random Person Online</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
