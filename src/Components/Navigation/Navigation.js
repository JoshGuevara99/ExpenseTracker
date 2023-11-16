import React from 'react'
import './Navigation.css'

import { faHome, faBars} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navigation() {
  return (
    <div className='nav-container'>
        <NavLink className='nav-link' activeClassName = "active" to='/'>
            <FontAwesomeIcon icon = {faHome} />
        </NavLink>


        <NavLink  className='nav-link' to="/history">
            <FontAwesomeIcon icon = {faBars}/>
        </NavLink>
    


    
    
    </div>
  )
}

export default Navigation