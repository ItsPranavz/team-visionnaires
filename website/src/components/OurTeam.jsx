import React from "react";
import { Card } from "react-bootstrap";
import "../styles/ourteam.css";
import { Row, Col } from "react-bootstrap";
import PranavSharma from "../assets/pranav.jpg";
import Poornima from "../assets/poornima.jpg";
import Arnav from "../assets/arnav.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  delay: 350,
  once: false
});

function OurTeam() {
  return (
    <>
      <div className="team-background">
        <Row className="justify-content-center">
          <Col xs={10} sm={8} md={4} lg={2} className="pic-container">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-once="false"
              data-aos-delay="100"
            >
              <Card style={{ width: "18rem" }} className="about-card">
                <Card.Img
                  variant="top"
                  src={PranavSharma}
                  className="circular-img"
                />
                <Card.Body>
                  <Card.Title>Pranav Sharma</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={10} sm={8} md={4} lg={2} className="pic-container">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-once="false"
              data-aos-delay="200"
            >
              <Card style={{ width: "18rem" }} className="about-card">
                <Card.Img
                  variant="top"
                  src={Poornima}
                  className="circular-img"
                />
                <Card.Body>
                  <Card.Title>Poornima Thakur</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col xs={10} sm={8} md={4} lg={2} className="pic-container">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-once="false"
              data-aos-delay="300"
            >
              <Card style={{ width: "18rem" }} className="about-card">
                <Card.Img variant="top" src={Arnav} className="circular-img" />
                <Card.Body>
                  <Card.Title>Arnav Singh</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OurTeam;
