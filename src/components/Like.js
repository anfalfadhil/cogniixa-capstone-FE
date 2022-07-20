import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

let url = 'http://localhost:8080/tweets'




const Like = (post) => {

    const [like, setLike] = useState(11)
    const [likeActive, setLikeActive] = useState(false);


    // const currentTweet = post.id;
    // const currentUser = user.id;


    const likeHandler = () => {

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
            <button onClick={likeHandler}>👍</button>
        </div>)
}

export default Like