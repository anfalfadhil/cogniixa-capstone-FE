import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserApi from "../apis/UserApi";

const Login = () => {


    let url = 'http://localhost:8080/tweets'
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const navigate = useNavigate();
    const navigateToTweets = () => {
        navigate("/");
      };


      const LoginHandler = (event) => {

        event.preventDefault();

        console.log("user name: " + username);
        console.log("email: " + email);
        console.log("password: " + password);

        const user = {
            "username": username,
            "email": email,
            "password": password
        }

        UserApi.loginUser(user)
        setUsername("")
        setEmail("")
        setPassword("")

        navigateToTweets();

    }



    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={LoginHandler}>
            <input type="text" name="username" value={username} onChange={(event )=> {setUsername(event.target.value)}} />
            <input type="text" name="email" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
            <input type="text" name="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
            <input type="submit" value="Login" />
            </form>


        </div>)
}


export default Login;













