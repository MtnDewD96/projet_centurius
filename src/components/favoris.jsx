import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
class Favoris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _favorisTitle: "Crier LET'S GOOOOO au Parc Blanchard",
      get favorisTitle() {
        return this._favorisTitle;
      },
      set favorisTitle(value) {
        this._favorisTitle = value;
      },
    };
  }
  render() {
    const { favorisTitle } = this.state;
    return (
      <Col>
        <Row className="favoris_title text-center">
          <Col md={2}>
            <FontAwesomeIcon
              className="subscribe_header_pinIcon"
              icon={faVolleyballBall}
            />
          </Col>
          <Col md={10}>
            <p>{favorisTitle}</p>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Favoris;
