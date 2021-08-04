import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
class Favoris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _favorisTitle: "Parc Blanchard",
            get favorisTitle() {
                return this._favorisTitle;
            },
            set favorisTitle(value) {
                this._favorisTitle = value;
            },
        };
    }
    render() {
        const { favorisTitle } = this.state;
        return (
            <ul className="favorisContainer">
                <FontAwesomeIcon
                    className="subscribe_header_pinIcon m-2"
                    icon={faVolleyballBall}
                />
                <li className="favoris_title">{favorisTitle}</li>
            </ul>
        );
    }
}

export default Favoris;
