import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({items, ...rest}) {

  return (
    <nav {...rest}>
        <ul className='nav__list'>
            {items.map(item => (
                <li key={item.name}><NavLink to={item.path}>{item.name}</NavLink></li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar
