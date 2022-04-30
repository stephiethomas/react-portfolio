import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
 return(
     <section className="header_section">
         <div className="header">
        <h1> Stephanie Thomas </h1>
        </div>
        <nav className="nav">
            <ul>
                <Link to="/">
                 <li>About</li>   
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/resume">
                    <li>Resume</li>
                </Link>                
            </ul>
        </nav>
     </section>
 ); 
 
}

export default Header;