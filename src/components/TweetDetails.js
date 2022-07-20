import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";



function TweetDetails({ match }) {
    const [deleted, setDeleted] = useState(false);
    const [tweet, setTweet] = useState({});
    const [showLikes, setShowLikes] = useState(0);
    const [comments, setComments] = useState([])

    let id = match.params.id;
    console.log(id)

    const URL = "http://localhost:8080/tweets"
    //fetching the tweet from db
    useEffect(() => {
        axios
            .get(`${URL}/${match.params.id}`)
            .then((response) => {
                console.log(response)
                setTweet(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [match.params.id]);












    return (
        <div >
            <h2>{tweet.username} </h2>
            <p> {tweet.text} </p>
        </div>
    );
}

export default TweetDetails;