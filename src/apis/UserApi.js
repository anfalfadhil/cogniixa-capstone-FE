let url = 'http://localhost:8080/api/user'
let newUserURL = 'http://localhost:8080/user/new'



const UserApi = {

    getUserById : (id) => {

        fetch(`${url}/${id}`, {
            method: 'GET', 
            body: JSON.stringify(id),
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

    loginUser: (user) => {
        fetch(url, {
            method: 'GET', 
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
    }
    




}


export default UserApi;