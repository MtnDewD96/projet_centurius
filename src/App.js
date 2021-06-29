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
import Billboard from "./components/billboard";
import BillboardTitle from "./components/billboardTitle";

function App() {
    return (
        <div>
            <Navbar_Cen />

            <Container fluid className="p-0 dashboard">
                <Row>
                    <Col md={2}>
                        <FavorisBar />
                    </Col>
                    <Col md={6}>
                        {" "}
                        {/*Grosseur de la colonne*/}
                        <NewsFeed />
                    </Col>
                    <Col md={4}>
                        <div className="billboard position-sticky sticky-top">
                            <BillboardTitle />
                            <Billboard
                                postName={"Emil Rebut"}
                                postUsername={"Je suis pas une bonne personne"}
                            />
                            <Billboard
                                postName={"Domingo"}
                                postUsername={
                                    "Algun latino para ver el partido de los Yankees"
                                }
                            />
                            <Billboard
                                postName={"Fap Lab"}
                                postUsername={"Machine à vendre po chêrs"}
                            />
                            <Billboard
                                postName={"Pat Doucette"}
                                postUsername={
                                    "Pas le droit aux sandales avec des bas sur le campus"
                                }
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
