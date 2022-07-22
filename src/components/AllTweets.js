
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Like from "../components/Like"
<<<<<<< HEAD
import Delete from "./Delete";
import Comment from "./Comment";

=======
import '../App.css'
>>>>>>> 8b9ab5ac367bca600ea36071bd750e18ad1a3eb5

function AllTweets() {
  const [tweets, setTweets] = useState([]);

useEffect(() => {
   
  axios.get('http://localhost:8080/user', {
    headers: {
      Authorization: 'Bearer ' +  localStorage.getItem("token")
    }} ).then(
      res => {console.log(res)},
      err => {console.log(err)}
    )
}, []);


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
<<<<<<< HEAD
          
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

=======
          // <Link to={`/tweets/${tweet.id}`}>
            <div className="card" key={tweet._id}>
            
              <h2 className="tweet-author"> {tweet.user.username} </h2>
              <p className="tweet-text">{tweet.text}</p>
              <p>{tweet.likes.length}</p>
              <Like />
            
            

            <div>
                {tweet.comments.map(comment =>
                  <p className="tweet-comments">{comment.text}</p>
                  )}
              </div>
>>>>>>> 8b9ab5ac367bca600ea36071bd750e18ad1a3eb5
          </div>

          // </Link>
        );
      })}

      
    </div>
<<<<<<< HEAD
  )
=======


  );
>>>>>>> 8b9ab5ac367bca600ea36071bd750e18ad1a3eb5
}

export default AllTweets;