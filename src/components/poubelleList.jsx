import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Poubelle from "./poubelle";
class PoubelleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: true,
      name: "Poubelle",
    };
  }
  render() {
    const { showContent } = this.state;
    return (
      <Container className="poubelleList_container">
        <Row className="poubelleList_header justify-content-center">
          <button
            className="trashList_button"
            onClick={() => this.showHideContent()}
          >
            {this.formatName()}
          </button>
        </Row>
        <Row>
          <hr></hr>
        </Row>
        {showContent && <Poubelle />}
      </Container>
    );
  }

  formatName() {
    const { name } = this.state;
    return name === "" ? "Poubelle" : name;
    //Aller chercher le nom du groupe dans les favoris du user dans la BD et le passer à name
  }
  showHideContent() {
    this.setState({ showContent: !this.state.showContent });
  }
}

export default PoubelleList;
