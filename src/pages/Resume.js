import React from "react";
import { Container, Row, Col } from "reactstrap";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import Volunteer from "../components/resume/Volunteer";

function Resume() {
  return (
    <Row>
      <Col xs="6">
        <Experience></Experience>
      </Col>
      <Col xs="6">
        <Education></Education>
        <Volunteer></Volunteer>
      </Col>
    </Row>
  );
}
export default Resume;
