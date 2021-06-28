import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
class Poubelle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col>
        <Row>
          <p className="text-center">Chris Lee</p>
        </Row>
      </Col>
    );
  }
}

export default Poubelle;
