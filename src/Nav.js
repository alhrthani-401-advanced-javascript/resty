import React from 'react';
import ReactJson from 'react-json-view' 
import {Link} from 'react-router-dom'

const Nav = () => {



    return (
        <nav>
            <h3>RESTy</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/help">Help</Link></li>


            </ul>
        </nav>
       
    )

}

export default Nav;