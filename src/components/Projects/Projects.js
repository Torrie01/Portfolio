import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently in HNG.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Updating UTC Time in Milliseconds"
              description="Creating a page that updates UTC time in milliseconds involves developing a real-time clock application. This page displays the current Coordinated Universal Time (UTC) and continuously updates it, showing the time in milliseconds."
              ghLink="https://github.com/Torrie01/HNG-1"
              demoLink="https://torrie01.github.io/HNG-1/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TMDB Movie App"
              description="The TMDB movie app  developed is a convenient and user-friendly mobile or web application designed for movie enthusiasts. It offers a comprehensive and enjoyable experience for discovering, exploring, and enjoying movies. Users can browse through an extensive library of films, access detailed information about each movie, watch trailers, read reviews and ratings, and even stream or download their favorite films. Movie apps often include features like personalized recommendations, user-generated lists, and the ability to create a watchlist. With the convenience of a movie app, users can turn their devices into portable cinemas, making it easy to stay up-to-date with the latest releases and timeless classics, all from the palm of their hand."
              ghLink="https://github.com/Torrie01/HNG-2"
              demoLink="https://vercel.com/gbonetoritse-gmailcom/hng-2/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Drag & Drop Image Gallery"
              description="A drag and drop image gallery is a user interface feature that allows users to rearrange and organize images within a gallery by simply dragging and dropping them to different positions. This interactive and intuitive functionality enhances the user experience when browsing and managing images, as it provides a more flexible and visually engaging way to sort and reorder the displayed images. It  provides an engaging and user-friendly way to interact with and organize images, making it a valuable feature for applications and websites that involve image management and presentation."
              ghLink="https://github.com/Torrie01/Image_gallery_HNG-DND"
              demoLink="https://vercel.com/gbonetoritse-gmailcom/image-gallery-hng-dnd"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
