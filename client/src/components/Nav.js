import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
           <ul>
             <li>
              <Link to="/">Home</Link>
            </li>
             <li>
              <Link to="/indoor">Indoor</Link>
            </li>
             <li>
              <Link to="outdoor">Outdoor</Link>
            </li> 
             <li>
              <Link to="/cart">Cart</Link>
            </li>       
             <li>
              <Link to="/login">Login</Link>
            </li>    
             <li>
              <Link to="/signup">Sign-Up</Link>
            </li>    
           </ul> 
        </nav>
    )
}

export default Nav
