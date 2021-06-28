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
          <p className="favoris_title text-center">Le parc Blanchard</p>
        </Row>
      </Col>
    );
  }
}

export default Favoris;
