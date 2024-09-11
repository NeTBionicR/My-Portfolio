import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,  // Visual Studio Code
  SiEclipseide,         // Eclipse
  SiPostman,            // Postman
  SiPycharm,            // PyCharm
  SiVmware,             // VMware
  SiVirtualbox,         // VirtualBox
  SiAndroidstudio,      // Android Studio
  SiAdobephotoshop,     // Photoshop
  SiAdobelightroomclassic, // Lightroom
  SiAdobepremierepro,   // Premiere Pro
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />  {/* Visual Studio */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />  {/* Eclipse */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />  {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />  {/* PyCharm */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVmware />  {/* VMware */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox />  {/* VirtualBox */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />  {/* Android Studio */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />  {/* Photoshop */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroomclassic />  {/* Lightroom */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />  {/* Premiere Pro */}
      </Col>
    </Row>
  );
}

export default Toolstack;
