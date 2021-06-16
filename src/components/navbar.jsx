import React, { Component } from "react";
import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import SearchBar from "./searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

class Navbar_Cen extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    ˇ
                    <Row className="w-100">
                        <Col md={4}>
                            <Navbar.Brand className="mr-auto" href="#home">
                                <img
                                    src="./img/Centurius_logo.png"
                                    width="60px"
                                    height="60px"
                                    alt="legault"
                                ></img>
                                <span className="logo-title align-middle">
                                    Centurius
                                </span>
                            </Navbar.Brand>
                        </Col>
                        <Col md={4}>
                            <SearchBar />
                        </Col>
                        <Col md={4} className=" d-flex justify-content-end">
                            <Nav>
                                <Nav.Link href="#notification">
                                    <FontAwesomeIcon
                                        className="sherb-green"
                                        icon={faBell}
                                    />
                                </Nav.Link>
                                <Nav.Link href="#profile">
                                    Doyon, Marc-André
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        );
    }
}

export default Navbar_Cen;
