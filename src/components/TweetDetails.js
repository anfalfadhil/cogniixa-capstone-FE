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


    //fetch the comments from db passing the tweet's id 
    // useEffect(() => {
    //     axios
    //     //url for comment table
    //         .get(`${URL}/${match.params.id}`)
    //         .then((response) => {
    //             setComments(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }, [match.params.id]);



    //fetch the likes from the likes table passing the tweet id
    // const like = () => {
    //     axios
    //         .get(`${URL}/${match.params.id}`)
    //         .then((response) => {
                
    //             );

    // };





    // const deletetweet = () => {
    //     const url = `${URL}/${match.params.id}`;

    //     axios
    //         .delete(url)
    //         .then((response) => {
    //             setDeleted(true);
    //         })
    //         .catch(console.error);
    // };





    // if (deleted) {
    //     return <Redirect to="/" />;
    // }





    return (
        <div >
            <h2>{tweet.username} </h2>
            <p> {tweet.text} </p>
            {/* <Button onClick={like} >{showLikes} 👍</Button> */}
            {/* <Button onClick={deletetweet} > Delete </Button> */}
        </div>
    );
}

export default TweetDetails;