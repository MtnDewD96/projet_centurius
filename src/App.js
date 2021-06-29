import logo from "./logo.svg";
import "./App.css";
import Navbar_Cen from "./components/navbar";
import { Col, Container, Row } from "react-bootstrap";
import NewsFeed from "./components/newsFeed";

import Post from "./components/post";
import FavorisBar from "./components/favorisbar";
import poubelleList from "./components/poubelleList";
import favorisList from "./components/favorisList";
import FavorisList from "./components/favorisList";
function App() {
    return (
        <div>
            <Navbar_Cen />

            <Container fluid className="p-0 dashboard">
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <FavorisBar />
                    </Col>
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
