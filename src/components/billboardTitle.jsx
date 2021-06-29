import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class BillboardTitle extends Component {
    render() {
        return (
            <Row>
                <span className="billboard_title">
                    <div style={{ textAlign: "center" }}>Billboard</div>
                </span>
            </Row>
        );
    }
}

export default BillboardTitle;
