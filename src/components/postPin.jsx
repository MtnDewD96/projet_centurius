import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
class PostPin extends Component {
    constructor(props) {
        super(props);
        const postName = "";
        const postUsername = "";
        this.state = {
            name: "",
            username: "",
            addPost: true,
        };
    }
    render() {
        return (
            <Container className="post_container pb-0">
                <Row className="post_header">
                    <Col md={2}>
                        <button
                            className="billboard_postPin"
                            onClick={() => alert("Fok you")}
                        >
                            <img
                                src="./img/Centurius_logo.png"
                                className="billboard_picture"
                                alt="legault"
                            />
                        </button>
                    </Col>
                    <Col className="p-0">
                        <p className="billboard_username m-0">
                            {this.props.dataUsername}
                        </p>
                        <span className="post_header_publicator">
                            Publié par {this.props.dataName}
                        </span>
                    </Col>
                    <Col md={1} className="d-flex justify-content-end">
                        <button
                            className="billboard_postPin"
                            onClick={() => alert("Effacer post du billboard")}
                        >
                            <FontAwesomeIcon icon={faMapPin} />
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PostPin;
