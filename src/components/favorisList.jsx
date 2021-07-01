import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
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
          <button
            className="favList_button"
            onClick={() => this.showHideContent()}
          >
            {this.formatName()}
          </button>
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
