import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import {getClick2} from '../actions'
function Nav() {
  return (
   <nav>
       <img className="logo" src="https://edmidentity.com/wp-content/uploads/2016/02/spinnin_records_wallpaper__normal__by_angiegehtsteil-d8ic15b.png" />
       <ul className="nav-links">
       <Link to='/searcbar'>
           <li>search</li>
           </Link>
           <Link to='/details'>
           <li>details</li>
           </Link>
           <Link to='/favorites'>
           <li onClick={getClick2} >favorites</li>
           </Link>
       </ul>
   </nav>
  );
}

export default Nav;
