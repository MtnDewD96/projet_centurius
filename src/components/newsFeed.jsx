import React, { Component } from "react";
import Post from "./post";
import axios from "axios";

class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:9090/api/publications?index=0&limit=10")
            .then((res) => {
                if (res.headers["content-type"] === "text/html;charset=UTF-8") {
                    window.location.href = "http://localhost:9090/api";
                }
                const postArray = res.data;
                this.setState({ postArray });
                console.log(res);
            });
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
