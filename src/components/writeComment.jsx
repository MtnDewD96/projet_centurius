import React, { Component } from "react";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

class WriteComment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row className="pb-2">
                <Col
                    className="d-flex align-item-start flex-column post_comment_left"
                    md={1}
                >
                    <div className="mb-auto">
                        <img
                            src="./img/Centurius_logo.png"
                            className="post_comment_picture"
                            alt="legault"
                        ></img>
                    </div>
                </Col>
                <Col>
                    <Form className="d-flex align-items-center write_comment_container align-middle h-100">
                        <FormControl
                            type="text"
                            placeholder="Écrire un commentaire..."
                            className="mr-2 write_comment_textfield"
                            aria-label="Comment"
                        />
                        <Button variant="outline-success">
                            <FontAwesomeIcon className="" icon={faAngleRight} />
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default WriteComment;
