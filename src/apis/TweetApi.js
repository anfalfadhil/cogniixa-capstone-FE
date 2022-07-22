let url = 'http://localhost:8080/api/tweet'


const TweetApi = {

    createTweet: (tweet) => {
        fetch(url, {
            // credentials: 'include',
            method: 'POST', 
            body: JSON.stringify(tweet),
            headers: {"Content-Type": "application/json" , 
                    "Authorization": sessionStorage.getItem("Authentication"), 
                    "Principal": sessionStorage.getItem("Principal"), },
        })
        .then (response => {
            console.log(response);
            return response.json();
        })
        .then( (data) => {
            console.log(data)
        })
        .catch(error => console.log(error))
    },


    getLikes: (tweet) => {
        fetch(url, {
            method: 'GET', 
            body: JSON.stringify(tweet.like),
            headers: {"Content-Type": "application/json" }
        })
        .then (response => {
            console.log(response);
            return response.json();
        })
        .then( (data) => {
            console.log(data)
        })
        .catch(error => console.log(error))
    },

    

 


}


export default TweetApi;