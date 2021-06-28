import logo from "./logo.svg";
import "./App.css";
import Navbar_Cen from "./components/navbar";
import { Col, Container, Row } from "react-bootstrap";
import NewsFeed from "./components/newsFeed";

function App() {
    return (
        <div>
            <Navbar_Cen />

            <Container fluid className="p-0">
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={6}>
                        <NewsFeed />
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
