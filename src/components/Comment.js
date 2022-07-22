import React, {useState} from "react";


const Comment = props => {
    const tweetid = props.tweetid
    // const commentOb = props.commentO
    const comment_url = `http://ec2-52-205-204-127.compute-1.amazonaws.com/api/comment/${tweetid}`
    const [comment, setComment] = useState("")

    const commentO = {
        "text": comment
    }

    const newCommentHandler = async (e) => {
        e.preventDefault();
        console.log(JSON.parse(`{"text": "${comment}"}`))
        console.log(JSON.stringify(commentO))
        fetch(comment_url, {
            method: "POST",
            body: JSON.stringify(commentO),
            headers: {"Content-Type": "application/json",
                      "Authorization": sessionStorage.getItem("Authentication"), 
                      "Principal": sessionStorage.getItem("Principal")
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
    }

    // const displayTextbox = () => {
    //     console.log("button clicked")
    //     return (
    //         <p>hiiiiiii</p>
    //         // <form onSubmit = {newCommentHandler}>
    //         //     <label htmlFor="comment">Comment</label>
    //         //     <input type="text"
    //         //             id="comment"
    //         //             onChange={(e) => setComment(e.target.value)}
    //         //             value={comment}
    //         //             required
    //         //       />
    //         //       <button>Comment</button>
    //         // </form>
    //     )
    // }



    return(
        <div>

            <form onSubmit = {newCommentHandler}>
                 <label htmlFor="comment">Comment</label>
                 <input type="text"
                         id="comment"
                         onChange={(e) => setComment(e.target.value)}
                         value={comment}
                         required
                   />
                <button>add comment💬</button>     {/*onClick={displayTextbox} */}
             </form>
        
    
        </div>
    )
}

export default Comment