import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import PostPin from "./postPin";

class PinedPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container className="post_container pb-0">
                <PostPin />
            </Container>
        );
    }
}

export default PinedPost;
