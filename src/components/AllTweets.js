
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Like from "../components/Like"
import Delete from "./Delete";
import Comment from "./Comment";


function AllTweets() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/tweet/all')
      .then((response) => {
        // return response.json();
        console.log(response.data);
        setTweets(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);



  return (
    <div className="tweet-container">
      {tweets.map((tweet) => {
        return (
          
          <div className="card" key={tweet.id}>
            <h2 > {tweet.user.username} </h2>
            <Link to={`/tweets/${tweet.id}`}>

              <p >{tweet.text}</p>

            </Link>
            {/* <p>{tweet.id}</p> */}
            <Like tweetid = {tweet.id} likes = {tweet.likes}/>
            <Delete tweet = {tweet}/>
            <Comment tweetid = {tweet.id} commentO = {tweet.comments}/>
            <div className = "comment" key = {tweet.comments.id}>
                {tweet.comments.map(comment =>
                  <p>{comment.text}</p>
                  )}
            </div>

          </div>
        );
      })}
    </div>
  )
}

export default AllTweets;