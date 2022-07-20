let url = 'http://localhost:8080/users'

const UserApi = {

    createUser: (user) => {
        fetch(url, {
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