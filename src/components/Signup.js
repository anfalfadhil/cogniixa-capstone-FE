import React, { useState } from "react";
import UserApi from "../apis/UserApi";
import { useNavigate } from 'react-router-dom';


const Signup =() => {

    let url = 'http://localhost:8080/tweets'
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login");
      };


    const signupHandler = (event) => {

        event.preventDefault();

        console.log("user name: " + username);
        console.log("email: " + email);
        console.log("password: " + password);

        const user = {
            "username": username,
            "email": email,
            "password": password
        }

        UserApi.createUser(user)
        setUsername("")
        setEmail("")
        setPassword("")

        navigateToLogin();

    }

    return (
        <div>
            <h1>Signup page</h1>
            <form onSubmit={signupHandler}>
                <input type="text" name="username" value={username} onChange={(event )=> {setUsername(event.target.value)}} />
                <input type="text" name="email" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                <input type="text" name="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                <input type="submit" value="Sign up" />
            </form>
        </div>)

}

export default Signup;