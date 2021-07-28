import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlind } from "@fortawesome/free-solid-svg-icons";
class Poubelle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _poubelleTitle: "Avancer dans le cours de projet",
            get poubelleTitle() {
                return this._poubelleTitle;
            },
            set poubelleTitle(value) {
                this._poubelleTitle = value;
            },
        };
    }
    render() {
        const { poubelleTitle } = this.state;
        return (
            <ul className="favorisContainer">
                <FontAwesomeIcon
                    className="subscribe_header_pinIcon m-2"
                    icon={faBlind}
                />
                <li className="favoris_title">{poubelleTitle}</li>
            </ul>
        );
    }
}

export default Poubelle;
