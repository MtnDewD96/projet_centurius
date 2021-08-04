import React, { Component } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
class UserProfilePage extends Component {
  state = {
    nickName: "Emil Rebut",
    cip: "rebe0420",
    nickNameModify: false,
  };
  render() {
    const { nickName } = this.state;
    const { cip } = this.state;
    const { nickNameModify } = this.state;
    return (
      <Container className="post_container">
        <Col>
          <Row>
            <Col md={5}>
              <img
                src="./img/Centurius_logo.png"
                className="profilepage_picture"
                alt="legault"
              ></img>
            </Col>
            <Col md={3}>
              <Row>
                <p className="username">{nickName}</p>
              </Row>
              <Row>
                <Col className="d-flex">
                  <p className="modifyUser">CIP :</p>
                  <span>{cip}</span>
                </Col>
              </Row>
              <Row>
                <p className="modifyUser">Modifier le surnom</p>
              </Row>

              <Row>
                <Col className="p-0">
                  <Form className="inputNickname">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="inputNickname"
                        placeholder="Entrez surnom"
                      ></input>
                    </div>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col className="p-0">
                  <button
                    className="profilepage_button m-0"
                    onClick={() => alert("Does it exists in the DB?")}
                  >
                    Vérifier
                  </button>
                </Col>
                <Col className="p-0">
                  <button
                    className="profilepage_button m-0"
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
