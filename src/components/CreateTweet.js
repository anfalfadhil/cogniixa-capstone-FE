import React, { useState } from "react";
import TweetApi from '../apis/TweetApi'
import { useNavigate } from 'react-router-dom';
import UserApi from "../apis/UserApi";


const CreateTweet = props => {

    
    const [tweet, setTweet] = useState("");
    const [user, setUser] = useState({});
    const [created, setCreated] = useState(false);
    const [error, setError] = useState(false);



    const navigate = useNavigate();
    const navigateToTweets = () => {
        navigate("/");
      };



      const getUserByIdEntered = (id) => {
        const fetchedUser = UserApi.getUserById(id);
        setUser(fetchedUser);
      }

    const addTweetHandler = (event) => {
        event.preventDefault()
        getUserByIdEntered(user)
        console.log("Hello")
        
        console.log("Hello")
        console.log("tweet: " + tweet);
        console.log("user: " + user);

        const created_tweet = {
                    "text": tweet,
                    "user": user,
                    "likes": [],
                    "comments": []
                }

        console.log(created_tweet)
        TweetApi.createTweet(created_tweet)

        setTweet("")
        setUser(0)
        setCreated(true);
        
        
    };



    if (created) {
        navigateToTweets();
    }

    return (
        <div>
             {error && <p>Something went wrong...Please try again!</p>}
            <h2>Add a new tweet</h2>


            <form onSubmit={addTweetHandler}>
               <h2> Tweet: </h2>
                <input type="text" name="tweet" value={tweet} onChange={(event )=> {setTweet(event.target.value)}} />
                <input type="number" name="user" value={user} onChange={(event) => {setUser(event.target.value)}}/>
                <input type="submit" value="tweet" />
            </form>
        </div>
        
        )
}

export default CreateTweet;