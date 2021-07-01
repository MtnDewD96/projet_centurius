import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import FavorisList from "./favorisList";
import PoubelleList from "./poubelleList";
class FavorisBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abonnements",
    };
  }
  render() {
    return (
      <Container className="favoris_container position-sticky sticky-top">
        <Col>
          <Row className="favoris_header justify-content-center">
            <Col className="subscribe_header d-flex justify-content-center">
              {this.formatName()}
            </Col>
            <Row>
              <hr className="favoris_ligne"></hr>
            </Row>
            <Row>
              <FavorisList />
            </Row>
            <Row>
              <PoubelleList />
            </Row>
          </Row>
        </Col>
      </Container>
    );
  }

  formatName() {
    const { name } = this.state;
    return name === "" ? "Favoris" : name;
    //Aller chercher le nom du groupe dans les favoris du user dans la BD et le passer à name
  }
}

export default FavorisBar;
