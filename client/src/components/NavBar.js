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
                See Your Cards And Add A Card 
            </NavLink>

            

            {/* <NavLink to='/add-cards' className='item'>
                Add a Card to Your Collection
            </NavLink> */}

            <NavLink to='/scratchpads' className='item'>
                See Your ScratchPad Add a Note to your Scratchpad
            </NavLink>
            <NavLink to='/about' className='item'>
                About Us
            </NavLink> 
        </Menu>
        </div>
    )
}
 


export default NavBar;