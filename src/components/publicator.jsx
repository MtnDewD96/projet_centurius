import React, { Component } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";

class Publicator extends Component {
    constructor(props) {
        super(props);
        var heure = new Date(),
            time = " à " + heure.getHours() + "h" + heure.getMinutes() + "m";
        this.state = {
            currentTime: time,
            date: new Date().toLocaleDateString(),
            valueBio: "Rien",
            publication: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePost = this.handleChangePost.bind(this);
        this.handleSubmitPost = this.handleSubmitPost.bind(this);
    }

    handleChange(event) {
        this.setState({ valueBio: event.target.value });
    }

    handleSubmit(event) {
        alert("A name was susbmitted: " + this.state.valueBio);
        event.preventDefault();
    }

    handleChangePost(event) {
        this.setState({ publication: event.target.value });
    }

    handleSubmitPost(event) {
        alert("A dick was submitted: " + this.state.publication);
        event.preventDefault();
    }

    render() {
        return (
            <Container className="post_container fluid">
                <Row>
                    <Col md={3}>
                        <img
                            src="./img/Publicator_Logo.png"
                            className="publicator_picture"
                            alt="legault"
                        ></img>
                    </Col>
                    <Col md={5}>
                        <Row>
                            <span className="publicator_date">
                                {"Dernière publication le "}
                                {this.state.date}
                                {this.state.currentTime}
                            </span>
                        </Row>
                        <Row>
                            <span className="publicator_username">
                                <div style={{ textAlign: "left" }}>
                                    Marc Zucked
                                </div>
                            </span>
                        </Row>
                        <Row>
                            <p>I Own the world!!!</p>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Container className="post_container m-2">
                            <Row>
                                <Form onSubmit={this.handleSubmit}>
                                    <label className="publicator_bio">
                                        Biographie
                                    </label>
                                    <input
                                        type="text"
                                        class="sm-1"
                                        value={this.state.valueBio}
                                        onChange={this.handleChange}
                                        placeholder="Ajouter biographie"
                                    />
                                </Form>
                            </Row>
                            <Row>
                                <p></p>
                                <span className="publicator_bioText">
                                    {this.state.valueBio}
                                </span>
                            </Row>
                        </Container>
                    </Col>
                    <Row>
                        <Form onSubmit={this.handleSubmitPost}>
                            <label className="billboard_username">
                                {"Publier quelque de chose de pas pertinent"}
                            </label>
                            <Row>
                                <input
                                    type="text"
                                    class="mx-sm-1"
                                    value={this.state.publication}
                                    onChange={this.handleChangePost}
                                    placeholder="Écrivez de quoi"
                                />
                            </Row>
                        </Form>
                    </Row>
                    <Row>
                        <span className="publicator_bioText">
                            {this.state.publication}
                        </span>
                    </Row>
                </Row>
            </Container>
        );
    }
}
export default Publicator;
