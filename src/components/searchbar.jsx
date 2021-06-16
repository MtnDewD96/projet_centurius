import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Form className="d-flex align-items-center searchBar align-middle h-100">
                <Button variant="outline-success">
                    <FontAwesomeIcon className="" icon={faSearch} />
                </Button>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2 searchBar_form"
                    aria-label="Search"
                />
            </Form>
        );
    }
}

export default SearchBar;
