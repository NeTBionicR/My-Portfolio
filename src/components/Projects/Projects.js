import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Roblox from "../../Assets/Projects/Roblox.png";
import BookingH from "../../Assets/Projects/BookingH.png";
import AnimeService from "../../Assets/Projects/AnimeService.png";
import BCSAI from "../../Assets/Projects/BCSAI.jpg";
import VG from "../../Assets/Projects/VG.png";
import SR from "../../Assets/Projects/SR.jpeg";
import Sortify from "../../Assets/Projects/Sortify.jpg";

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
              description="A booking and review platform designed to help hair salons create accounts and allow users to book appointments through the website. Built using HTML, JavaScript, and CSS."
              ghLink="https://github.com/NeTBionicR/Website-For-Haircut-Booking"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AnimeService}
              title="Anime Streaming Service"
              description="A web application for streaming anime, built using React.js and integrating user authentication via an API."
              ghLink="https://github.com/NeTBionicR/Anime-Streaming-Service"
              demoLink="https://e2235970-tp2.azurewebsites.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BCSAI}
              title="Better Call Saul AI - Conuhacks IX Winner"
              description="An AI-powered legal assistant using Vite, React, TypeScript, DeepSeek, and Deepgram to help Quebec citizens get accurate legal information."
              ghLink="https://github.com/Stoplossking1/BetterCallSaulAI"
            />"
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VG}
              title="3D Art Gallery"
              description="An immersive 3D art gallery built with Unity and C#, featuring first-person navigation and Firebase-powered global chat. DEMO WILL SOON BE AVAILABLE."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SR}
              title="Shadow Realm – 2D Hack & Slash"
              description="A 2D hack & slash platformer in Unity, featuring multiple enemies, levels, a boss, and an endless wave mode, with Firebase for data storage. DEMO WILL SOON BE AVAILABLE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sortify}
              title="Automated Waste Management System"
              description="A smart trash bin using Python, YOLOv5, Raspberry Pi, and Arduino for AI-powered waste sorting."
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