import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlind } from "@fortawesome/free-solid-svg-icons";
class Poubelle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _poubelleTitle: "Chris Lee",
      get poubelleTitle() {
        return this._poubelleTitle;
      },
      set poubelleTitle(value) {
        this._poubelleTitle = value;
      },
    };
  }
  render() {
    const { poubelleTitle } = this.state;
    return (
      <Col>
        <Row className=" favoris_title text-center">
          <Col md={2}>
            <FontAwesomeIcon
              className="subscribe_header_pinIcon"
              icon={faBlind}
            />
          </Col>
          <Col md={10}>
            <p>{poubelleTitle}</p>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Poubelle;
