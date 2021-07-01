import React, { Component } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
class UserProfilePage extends Component {
  state = {
    nickName: "Emil Rebut",
    cip: "rebe0420",
  };
  render() {
    const { nickName } = this.state;
    const { cip } = this.state;
    return (
      <Container className="post_container fluid">
        <Col>
          <Row>
            <Col md={5}>
              <img
                src="./img/Centurius_logo.png"
                className="profilepage_picture"
                alt="legault"
              ></img>
            </Col>
            <Col md={6}>
              <Row>
                <p className="username">{nickName}</p>
              </Row>
              <Row>
                <Col md={2}>
                  <p className="modifyUser">CIP :</p>
                </Col>
                <Col>{cip}</Col>
              </Row>
              <Row>
                <p className="modifyUser">Modifier le surnom</p>
              </Row>

              <Row>
                <Col md={6}>
                  <Form>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Entrez surnom"
                      ></input>
                    </div>
                  </Form>
                </Col>
                <Col>
                  <button
                    className="profilepage_button"
                    onClick={() => alert("Does it exists in the DB?")}
                  >
                    Vérifier
                  </button>
                </Col>
                <Col>
                  <button
                    className="profilepage_button"
                    onClick={() => alert("sheesh")}
                  >
                    Changer
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default UserProfilePage;
