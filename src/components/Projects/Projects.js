import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Roblox from "../../Assets/Projects/Roblox.png";
import BookingH from "../../Assets/Projects/BookingH.png";
import AnimeService from "../../Assets/Projects/AnimeService.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookingH}
              title="Haircut Booking Website"
              description="A booking and review platform designed to help hair salons create accounts and allow users to book appointments through the website. Built using HTML, JavaScript, and CSS, the website enables salons to set up and manage their profiles, detailing their services, location, and availability. Users can create accounts to make and manage their reservations, leave reviews, and rate their experiences. Additionally, they can favorite salons for easier future access. I was the main coder and leader in a group of four, overseeing the development and ensuring the implementation of these features."
              ghLink="https://github.com/NeTBionicR/Website-For-Haircut-Booking"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AnimeService}
              title="Anime Streaming Service"
              description="During my stay at Collège de Maisonneuve, I designed and built a web application for streaming TV series, which would be used to watch anime. The application integrates user registration and login functionalities through an API provided to us by our professor, offering a seamless and interactive experience. By utilizing React.js and JavaScript XML, I implemented sophisticated features for users to look at the history of their watched shows and allow them to read details of the chosen anime."
              ghLink="https://github.com/NeTBionicR/Anime-Streaming-Service"
              demoLink="https://e2235970-tp2.azurewebsites.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Roblox}
              title="Roblox Game"
              description="Ongoing"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
