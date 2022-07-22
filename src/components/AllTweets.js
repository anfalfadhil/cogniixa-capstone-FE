
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Like from "../components/Like"
import '../App.css'

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
          </div>

          // </Link>
        );
      })}

      
    </div>


  );
}

export default AllTweets;