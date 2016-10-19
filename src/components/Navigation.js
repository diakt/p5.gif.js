import React from 'react'
import { Link } from 'react-router'
import { Nav, NavItem } from 'react-bootstrap';

const Navigation = () => {
  return (
      <Nav bsStyle="pills">
        <NavItem href="/">Gif</NavItem>
        <NavItem href="/about">About</NavItem>	
      </Nav>
  )
}

export default Navigation;
