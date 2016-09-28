import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
      <nav>
        Links:
        {' '}
        <Link to="/">Gif</Link>
        {' '}
        <Link to="/about">About</Link>
      </nav>
  )
}

export default Nav;
