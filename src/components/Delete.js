import React from "react";


const Delete = props => {
    const tweet = props.tweet
    const delete_url = "http://ec2-52-205-204-127.compute-1.amazonaws.com/api/tweet"
    console.log(tweet)

    const deleteHandler = () => {
        fetch(delete_url, {
            method: "DELETE",
            body: JSON.stringify(tweet),
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



    return(
        <div>
            <button onClick={deleteHandler}>🗑️</button>
        </div>
    )


}

export default Delete