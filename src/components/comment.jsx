import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row>
                <Col md={1}>
                    <img
                        src="./img/Centurius_logo.png"
                        className="post_comment_picture"
                        alt="legault"
                    ></img>
                </Col>
                <Col className="post_comment">
                    <p className="post_comment_username m-0">Centurius</p>
                    <span className="post_header_publicator">
                        Aenean congue mauris a ex vestibulum, sit amet ornare
                        erat suscipit. Curabitur bibendum congue porta. Praesent
                        consequat ultricies quam. Morbi rhoncus rhoncus orci vel
                        faucibus. Aliquam erat volutpat. Curabitur bibendum,
                        quam ut semper vulputate, erat leo porta massa, in
                        euismod nunc massa vel lacus. Proin a neque eleifend,
                        venenatis enim tincidunt, tempor nulla. Nulla porta
                        magna non sollicitudin tempor. Phasellus diam augue,
                        elementum scelerisque porttitor ut, pretium sit amet
                        ipsum. Maecenas suscipit libero vel est dapibus, nec
                        cursus odio interdum. Sed vitae ullamcorper nunc, sit
                        amet molestie lorem.
                    </span>
                </Col>
            </Row>
        );
    }
}

export default Comment;
