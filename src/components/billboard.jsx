import React, { Component } from "react";
import PinedPost from "./postPin";
import { Container, Col, Row } from "react-bootstrap";

class Billboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postName: "",
            postUsername: "",
        };
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <PinedPost
                        dataName={this.props.postName}
                        dataUsername={this.props.postUsername}
                    />
                </Row>
            </Container>
        );
    }
}

export default Billboard;
