import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';






const Like = props => {
    const tweetid = props.tweetid
    const like_url = `http://ec2-52-205-204-127.compute-1.amazonaws.com/api/tweet/like/${tweetid}`
    // console.log("This is the tweet id " + tweetid)
    const [like, setLike] = useState(0)
    const [likeActive, setLikeActive] = useState(false);

    const likes = props.likes
    // console.log(likes.length)

    // const currentTweet = post.id;
    // const currentUser = user.id;

    const likeHandler = () => {
        fetch(like_url, {
            method: 'PUT', 
            
            headers: {"Content-Type": "application/json",
                      "Authorization": sessionStorage.getItem("Authentication"), 
                      "Principal": sessionStorage.getItem("Principal"),
                        }
        })
        .then (response => {
            console.log(response);
            return response.json();
        })
        .then( (data) => {
            console.log(data)
        })
        .catch(error => console.log(error));


        if (likeActive) {
            setLikeActive(false);
            setLike(like-1);
        } else {
            setLike(like+1)
            setLikeActive(true)
        }

    }

    
    // console.log(currentTweet);

    return (
        <div>
            <button onClick={likeHandler}>❤️{likes.length}</button>  {/* Search red heart emoji*/}
        </div>)
}

export default Like