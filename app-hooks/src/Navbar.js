import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    
        <ul className='nav col-md-6'>
            <li className='nav-item'>
                <Link className='nav-link active' to="/home">Home</Link>
                {/* <a className='nav-link active' href='/'>Home</a> */}
            </li>
            <li>
                <Link className='nav-link active' to="/add-contact">Add-Contact</Link>
                {/* <a className='nav-link active' href="/add-contact">Home</a> */}
            </li>
        </ul>
    
  )
}
export default  Navbar;