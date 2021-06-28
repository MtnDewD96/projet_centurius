import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class Favoris extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col>
        <Row>
          <p className="text-center">Crier LET'S GOOOOOO au Parc</p>
        </Row>
      </Col>
    );
  }
}

export default Favoris;
