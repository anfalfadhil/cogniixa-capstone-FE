
import './App.css';
import AllTweets from './components/AllTweets';
import CreateTweet from './components/CreateTweet';
import TweetDetails from './components/TweetDetails';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup';


function App() {
  return (
 
    <div className="App">
      <h1>All Tweets</h1>

      <Link to="/" >Home</Link>
      <Link to="/create"> Create Tweet</Link>
      <Link to="/signup"> Signup</Link>
      <Link to="/login"> Login</Link>
      
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
