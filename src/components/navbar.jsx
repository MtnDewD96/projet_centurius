import React, { Component } from "react";
import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import SearchBar from "./searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class Navbar_Cen extends Component {
    render() {
        return (
            <Navbar fixed="top" bg="light" expand="lg">
                <Container fluid>
                    ˇ
                    <Row className="w-100">
                        <Col md={4}>
                        <LinkContainer  exact to="/">
                            <Navbar.Brand className="mr-auto" href="#home">
                                <img
                                    src="./img/Centurius_logo.png"
                                    width="60px"
                                    height="60px"
                                    alt="legault"
                                ></img>
                                <span className="logo-title align-bottom">
                                    Centurius
                                </span>
                            </Navbar.Brand>
                            </LinkContainer>
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
                                <NavLink  exact to="/profil" className="nav-link">
                                    Doyon, André
                                </NavLink>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        );
    }
}

export default Navbar_Cen;
