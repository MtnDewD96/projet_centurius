import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentList from "./commentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faThumbsUp,
  faThumbsDown,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import {
    BiTennisBall,
    FaTableTennis,
    FcAdvance,
    ImPushpin,
} from "react-icons/all";
import Billboard from "./billboard";
import PinedPost from "./pinedPost";

class Post extends Component {
    constructor(props) {
        super(props);
        var heure = new Date(),
            time = " à " + heure.getHours() + "h" + heure.getMinutes() + "m";
        this.state = {
            currentTime: time,
            date: new Date().toLocaleDateString(),
            showComment: false,
        };
    }

  showHideComment() {
    this.setState({ showComment: !this.state.showComment });
  }

  render() {
    const { showComment } = this.state;
    return (
      <Container className="post_container pb-0">
        <Row className="post_header">
          <Col md={2}>
            <img
              src="./img/Centurius_logo.png"
              className="post_picture"
              alt="legault"
            ></img>
          </Col>
          <Col className="p-0">
            <p className="post_username m-0">Centurius</p>
            <span className="post_header_publicator">
              Publié par Derek Jeter
            </span>
          </Col>
          <Col md={1} className="d-flex justify-content-end">
            <FontAwesomeIcon className="post_header_pinIcon" icon={faMapPin} />
          </Col>
        </Row>
        <Row className="post_body">
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pharetra lobortis ante a faucibus. Etiam nunc neque, tempus mollis
            purus malesuada, cursus imperdiet erat. Fusce et hendrerit tortor,
            feugiat ullamcorper odio. Etiam eleifend velit diam, sed ullamcorper
            quam tempus ac. Nullam vitae urna at sem lobortis tincidunt a et
            arcu. Donec eleifend sem vitae erat pharetra gravida. Pellentesque a
            laoreet nisi, pharetra finibus tellus. Phasellus ultricies nisi
            turpis, nec consequat enim ultricies sit amet. Proin sodales lacinia
            sapien in gravida. Suspendisse ut metus est. Pellentesque porta, mi
            at sodales rhoncus, justo elit tempor libero, eget aliquam dolor
            orci eu odio. Donec ultrices iaculis augue, vitae consequat ligula
            luctus vel.
          </Col>
        </Row>
        <Row className="post_button_group p-0">
          <Col className="d-flex justify-content-center p-0">
            <button
              className="post_body_button post_body_button_left"
              onClick={() => alert("sheeeeesh")}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
          </Col>
          <Col className="d-flex justify-content-center p-0">
            <button
              className="post_body_button"
              onClick={() => alert("not sheesh")}
            >
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </Col>
          <Col className="d-flex justify-content-center p-0">
            <button
              className="post_body_button post_body_button_right"
              onClick={() => this.showHideComment()}
            >
              <FontAwesomeIcon icon={faReply} />
            </button>
          </Col>
        </Row>
        {showComment && <CommentList />}
      </Container>
    );
  }
                        <p className="date_post">
                            {"Le "}
                            {this.state.date}
                            {this.state.currentTime}
                        </p>
                            className="post_header_pin"
                        <button
                            onClick={() => alert("Ajouter post au bilboard")}
                        >
                            <FontAwesomeIcon icon={faMapPin} />
                        </button>
}

export default Post;
