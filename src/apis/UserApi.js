let url = 'https://ec2-52-205-204-127.compute-1.amazonaws.com/user'
let newUserURL = 'https://ec2-52-205-204-127.compute-1.amazonaws.com/user/new'
let loginURL = 'https://ec2-52-205-204-127.compute-1.amazonaws.com/authenticate'





const UserApi = {

    getUserById : (id) => {

        fetch(`${url}/${id}`, {
            method: 'GET', 
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

    createUser: (user) => {
        fetch(newUserURL, {
            method: 'POST', 
            body: JSON.stringify(user),
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

    loginUser: (user, token) => {
        fetch(loginURL, {
            method: 'POST', 
            body: JSON.stringify(user),
            headers: {"Content-Type": "application/json", "Authentication":  "Bearer " + token }
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

    thisUser: ( thisUser ) => {
        fetch(url, {
            method: 'GET', 
            // body: JSON.stringify(),
            headers: {"Content-Type": "application/json", "Authentication":  "Bearer " + thisUser.Authentication, "Principal": thisUser.Principal }
        })
        .then (response => {
            console.log(response);
            return response.json();
        })
        .then( (data) => {
            console.log(data)
        })
        .catch(error => console.log(error))
    }
    




}


export default UserApi;