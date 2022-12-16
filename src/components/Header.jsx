import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h4> 
                <Link to={"/about"}>About</Link>
                | 
                <Link to={"/form"}>Form</Link>
                | 
                <Link to={"/cities/Chicago"}>Chicago</Link>
                |
                <Link to={"/cities/Tampa"}>Tampa</Link>
                |
                <Link to={"/cities/Seattle"}>Seattle</Link>
                
            </h4>
        </div>
    )
};


export default Header;
