import React, {useState} from 'react'
import './Hamburger.css'
import MenuIcon from '@mui/icons-material/Menu';

function Hamburger() {
  // By default, we want to hide the sidebar navigation. 
  // Then, when the menu button is clicked, we can then call the updater function,
  // setNavbarOpen, to update the state.
  return (
    <div className="menu">
      <MenuIcon />
    </div>
  )
}

export default Hamburger