import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

function Layout() {
  return (
    <div>
        <Navigation/>
        <div className='page'>

            <Outlet/>
        </div>


    </div>
  )
}

export default Layout