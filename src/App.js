
// import './App.css';
import AllTweets from './components/AllTweets';
import CreateTweet from './components/CreateTweet';
import TweetDetails from './components/TweetDetails';
import NavBar from './components/NavBar';
import Login from './components/Login';
import "./styles.css";



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';





function App() {
  return (
 
    <div className="App">
      
    <NavBar />
    <h1 className="all-tweets-title">Tweets</h1>
      <Routes>
        
      <Route path="/create" element={ <CreateTweet /> } /> 
      <Route path="/" exact element={ <AllTweets/> }  />
      <Route index  path="/create"  element={ <CreateTweet /> }/>
      <Route path="/signup" element={ < Signup />} />
      <Route path="/login" element={ < Login />} />
      <Route path="/tweets/:id" exact element={ < TweetDetails /> } />
      </Routes> 

      

      
      
    </div>
   
  );
}

export default App;
