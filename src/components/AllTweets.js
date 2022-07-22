
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
      .get('https://ec2-52-205-204-127.compute-1.amazonaws.com/api/tweet/all')
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
                  <div className = "comment1" key = {tweet.comments.id}>
                    <p>{comment.text}</p>
                  </div>
                  )}
            </div>

          </div>
        );
      })}
    </div>
  )
}

export default AllTweets;