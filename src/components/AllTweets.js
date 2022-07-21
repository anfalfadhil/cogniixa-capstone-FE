
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Like from "../components/Like"


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
          <div className="card" key={tweet._id}>
            <Link to={`/tweets/${tweet.id}`}>
              <h2> {tweet.username} </h2>
              <p>{tweet.text}</p>
              <Like />
             
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllTweets;