import React, { useState, useRef , useEffect, useContext} from "react";
import AuthContext from "../context/AuthProvider"
import { useNavigate } from 'react-router-dom';
import UserApi from "../apis/UserApi";
import axios from '../apis/axios'


const LOGIN_URL = '/authenticate'
const Login = () => {

    const { setAuth } = useContext(AuthContext);
   const userRef = useRef();
   const errRef = useRef();

   

    let url = 'http://localhost:8080/tweets'
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)


    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])


    useEffect(() => {
       setErrMsg('');
    }, [username, password])

    const navigate = useNavigate();
    const navigateToTweets = () => {
        navigate("/");
      };


      const LoginHandler = (event) => {

        event.preventDefault();

        console.log("user name: " + username);
        console.log("password: " + password);

        const user = {
            "username": username,
            "password": password
        }

        UserApi.loginUser(user)
        setUsername("")
        setPassword("")

        navigateToTweets();

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);



        try {
        const response = await axios.post(LOGIN_URL, JSON.stringify({username, password},
            {
                headers: { 'Content-Type':'application/json'},
                withCredentials: true,
                
            }))


        console.log(JSON.stringify(response?.data));
        // console.log(JSON.stringify(response?.data));

        const accessToken = response?.data.accessToken;
        const roles = response?.data?.roles;
        setAuth({ username, password, roles, accessToken });
        setSuccess(true);
        setUsername('');
        setPassword('');
        navigateToTweets();

        } catch (err) {

            if (!err?.response ) {
                setErrMsg("No server response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing username or password")
            
            } else if ( err.response?.status === 401) {
                setErrMsg("Unauthorized");
            
            } else {
                setErrMsg(" Login Failed");
            }



        }

        
    }



    return (

        <div>
            <h2>Log in</h2>
            {/* <form onSubmit={LoginHandler}>
            <input type="text" name="username" value={username} onChange={(event )=> {setUsername(event.target.value)}} />
            <input type="text" name="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
            <input type="submit" value="Login" />
            
            </form> */}


            <p className= {errMsg? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSubmit}>


                <label htmlFor="username">Username</label>
                <input type="text"
                        id="username"
                        // ref={userRef}
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













