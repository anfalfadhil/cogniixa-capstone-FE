import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div className="nav-container">
          <Link className="nav-link" to="/" >Home</Link>   
          <Link className="nav-link" to="/create"> Create Tweet</Link>
          <Link className="nav-link" to="/signup"> Signup</Link>
          <Link className="nav-link" to="/login"> Login</Link>
    
        </div>)
}

export default NavBar





