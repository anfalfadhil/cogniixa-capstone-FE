import React, { useState } from "react";
import UserApi from "../apis/UserApi";
import { useNavigate } from 'react-router-dom';


const Signup =() => {

    let url = 'http://ec2-52-205-204-127.compute-1.amazonaws.com/tweets'
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [created,setCreated] = useState(false)


    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login");
      };


      const redirectToHome = () => {
        if (created) {
            alert("WELCOME!!!")
            navigateToLogin();
        }
    }

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
        setCreated(true)


        navigateToLogin()
        

    }




    return (
        <div>
            <h1>Signup page</h1>
            <form onSubmit={signupHandler}>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={username} onChange={(event )=> {setUsername(event.target.value)}} />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                <label htmlFor="password">Passowrd</label>
                <input type="text" name="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                <input type="submit" value="Sign up" />
            </form>
        </div>)

}

export default Signup;