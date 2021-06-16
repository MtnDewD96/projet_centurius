import React, { Component } from "react";
import Comment from "./comment";
import { Container, Row } from "react-bootstrap";

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container className="mt-2 mr-2 p-0">
                <Comment />
            </Container>
        );
    }
}

export default CommentList;
