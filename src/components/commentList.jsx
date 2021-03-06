import React, { Component } from "react";
import Comment from "./comment";
import { Container } from "react-bootstrap";
import WriteComment from "./writeComment";

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container className="mt-2 mr-2 p-0">
                <Comment />
                <Comment />
                <Comment />
                <WriteComment />
            </Container>
        );
    }
}

export default CommentList;
