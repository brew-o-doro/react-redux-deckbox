import React from 'react';
 
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';

import '../App.css';
 


const NavBar = () => {

 
    return (
        <div className="nav">
          <Menu>       
            <NavLink to='/' className='item'>
                Home
            </NavLink>

            <NavLink to='/cards' className='item'>
                View All Cards In Your Deckbox
            </NavLink>

            <NavLink to='/about' className='item'>
                About Us
            </NavLink> 

            <NavLink to='/add-cards' className='item'>
                Add a Card to Your Collection
            </NavLink>
        </Menu>
        </div>
    )
}
 


export default NavBar;