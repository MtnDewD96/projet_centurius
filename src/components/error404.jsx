import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
class PageNotFound extends Component {
  state = {};
  render() {
    return (
      <Container className="favoris_container">
        <Col>
          <Row>
            <img src="./img/erreur_logo.png" alt="ledont"></img>
          </Row>
          <Row className="text-center">
            <p className="publicator_username">SHEEEEEEEEEEEEEEEEEEEEEEEESH</p>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default PageNotFound;
