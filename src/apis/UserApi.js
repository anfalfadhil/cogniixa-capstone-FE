let url = 'http://localhost:8080/user'
let newUserURL = 'http://localhost:8080/user/new'
let loginURL = 'http://localhost:8080/authenticate'





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