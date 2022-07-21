import React, { useState, useRef , useEffect, useContext} from "react";
import AuthContext from "../context/AuthProvider"
import { useNavigate } from 'react-router-dom';
import UserApi from "../apis/UserApi";
import axios from '../apis/axios'


const LOGIN_URL = 'http://localhost:8080/authenticate'
const Login = () => {





    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("Failed to login")
    const [success, setSuccess] = useState(false)
    const [token, setToken] = useState("")
    const [thisUser, setThisUser] = useState({})


    const user = {
        "username": username,
        "password": password
    }


    useEffect(() => {
       setErrMsg('');
    }, [username, password])

    const navigate = useNavigate();
    const navigateToTweets = () => {
        navigate("/");
      };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);


         fetch(LOGIN_URL, {
            method: 'POST', 
            body: JSON.stringify(user),
            headers: {"Content-Type": "application/json"}
        })
        .then (response => {
            console.log(response);
            return response.json();
        })
        .then( (data) => {
            console.log(data.jwt)
            setToken(data.jwt)
            localStorage.setItem("token" , "Bearer " + data.jwt);
            localStorage.setItem("Principal", "ROLE_USER");
            

           console.log("storage token ----> " +  localStorage.getItem("token"))
        })
        .catch(error => console.log(error))

      

        setSuccess(true);
        setUsername('');
        setPassword('');
        // navigateToTweets();

        // const thisUser = {
        //     "Authentication" : sessionStorage.getItem("Authentication"),
        //     "Principal" : sessionStorage.getItem("Principal")
        // }


        // console.log("befor this user")
        // UserApi.thisUser(thisUser);
        // console.log(UserApi.thisUser(thisUser))
        console.log("after this user")
        navigateToTweets();
        
    }



    return (

        <div>
            <h2>Log in</h2>
 
            <p className= {errMsg? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSubmit}>


                <label htmlFor="username">Username</label>
                <input type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                  />



                <label htmlFor="password">Password</label>
                <input type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                  />
                  <button>Log in</button>
            </form>
        </div>)
}


export default Login;













