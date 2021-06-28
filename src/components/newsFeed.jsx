import React, { Component } from "react";
import Post from "./post";

class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}

export default NewsFeed;
