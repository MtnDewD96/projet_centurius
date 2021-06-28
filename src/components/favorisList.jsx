import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Favoris from "./favoris";
class FavorisList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: true,
      name: "Favoris",
    };
  }
  render() {
    const { showContent } = this.state;
    return (
      <Container className="poubelleList_container">
        <Row className="poubelleList_header justify-content-center">
          {this.formatName()}
        </Row>
        <Row>
          <hr></hr>
        </Row>
        {showContent && <Favoris />}
      </Container>
    );
  }

  formatName() {
    const { name } = this.state;
    return name === "" ? "Favoris" : name;
  }

  showHideContent() {
    this.setState({ showContent: !this.state.showContent });
  }
}

export default FavorisList;
