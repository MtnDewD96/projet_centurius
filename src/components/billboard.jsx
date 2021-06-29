import React, { Component } from "react";
import PinedPost from "./postPin";
import { Container, Col, Row } from "react-bootstrap";

class Billboard extends Component {
    constructor(props) {
        super(props);
        const postName = "";
        const postUsername = "";
        this.state = {
            postName: "",
            postUsername: "",
            // addPost: true,
        };
        // this.addPostToBillboard = this.addPostToBillboard.bind(this);
        // this.erasePost = this.erasePost.bind(this);
    }

    // addPostToBillboard() {
    //     this.setState({ addPost: !this.state.addPost });
    // }

    // erasePost() {
    //     this.setState({ addPost: false });
    // }

    render() {
        // const { addPost } = this.state;
        return (
            <Container fluid>
                <Row>
                    {/* {addPost && ( */}
                    <PinedPost
                        dataName={this.props.postName}
                        dataUsername={this.props.postUsername}
                    />
                    {/* )} */}
                </Row>
            </Container>
        );
    }
}

export default Billboard;
