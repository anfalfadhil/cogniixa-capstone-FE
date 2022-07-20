import React, { useState } from "react";
import TweetApi from '../apis/TweetApi'
import { useNavigate } from 'react-router-dom';


const CreateTweet = props => {

    let url = 'http://localhost:8080/tweets'
    const [tweet, setTweet] = useState("");
    const [userid, setUserid] = useState(0);
    const [created, setCreated] = useState(false);
    const [error, setError] = useState(false);



    const navigate = useNavigate();
    const navigateToTweets = () => {
        navigate("/");
      };



    const addTweetHandler = (event) => {
        event.preventDefault()
        console.log("Hello")

        console.log("tweet: " + tweet);
        console.log("userid: " + userid);

        const created_tweet = {
                    // db name exactly????????
                    "text": tweet,
                    "user": userid,
                    "like": [],
                    "comments": []
                }

        console.log(created_tweet)
        TweetApi.createTweet(created_tweet)

        setTweet("")
        setUserid(0)
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
                <input type="number" name="userid" value={userid} onChange={(event) => {setUserid(event.target.value)}}/>
                <input type="submit" value="tweett" />
            </form>
        </div>
        
        )
}

export default CreateTweet;