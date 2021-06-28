import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import CommentDepthList from "./commentDepthList.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThumbsUp,
    faThumbsDown,
    faReply,
} from "@fortawesome/free-solid-svg-icons";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComment: false,
        };
    }

    showHideComment() {
        this.setState({ showComment: !this.state.showComment });
    }

    render() {
        const { showComment } = this.state;
        return (
            <div>
                <Row className="post_comment_row">
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

                        <div className="align-self-end">
                            <button className="post_icon post_icon_like">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <span className="align-middle">10</span>
                            </button>
                            <button className="post_icon post_icon_dislike">
                                <FontAwesomeIcon icon={faThumbsDown} />
                                <span>10</span>
                            </button>
                            <button
                                className="post_icon post_icon_reply"
                                onClick={() => this.showHideComment()}
                            >
                                <FontAwesomeIcon icon={faReply} />
                                <span>10</span>
                            </button>
                        </div>
                    </Col>
                    <Col className="post_comment">
                        <p className="post_comment_username m-0">Centurius</p>
                        <span className="post_header_publicator">
                            Aenean congue mauris a ex vestibulum, sit amet
                            ornare erat suscipit. Curabitur bibendum congue
                            porta. Praesent consequat ultricies quam. Morbi
                            rhoncus rhoncus orci vel faucibus. Aliquam erat
                            volutpat. Curabitur bibendum, quam ut semper
                            vulputate, erat leo porta massa, in euismod nunc
                            massa vel lacus. Proin a neque eleifend, venenatis
                            enim tincidunt, tempor nulla. Nulla porta magna non
                            sollicitudin tempor. Phasellus diam augue, elementum
                            scelerisque porttitor ut, pretium sit amet ipsum.
                            Maecenas suscipit libero vel est dapibus, nec cursus
                            odio interdum. Sed vitae ullamcorper nunc, sit amet
                            molestie lorem.
                        </span>
                        {/*                         
                        <div className="d-flex pt-2">
                            <div className="post_icon post_icon_like">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <span className="align-middle">10</span>
                            </div>
                            <div className="post_icon post_icon_dislike">
                                <FontAwesomeIcon icon={faThumbsDown} />
                                <span>10</span>
                            </div>
                            <div>
                                <button
                                    className="post_see_more_comments"
                                    onClick={() => this.showHideComment()}
                                >
                                    Voir les commentaires(10)
                                </button>
                            </div>
                        </div> */}
                    </Col>
                </Row>
                <Row>
                    <Col className="offset-1">
                        {" "}
                        {showComment && <CommentDepthList />}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Comment;
