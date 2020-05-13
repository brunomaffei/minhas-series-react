import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
  NavLink
} from 'reactstrap'
import '../Styles/styles.css'

import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className="">
      <Navbar className="Nav" color='black' light expand='md'>
        <NavbarBrand style={{ color: "red" }} tag={Link} to='/'> Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={true} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink style={{ color: "red" }} tag={Link} to='/series'>Séries</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "red" }} tag={Link} to='/generos'>Generos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header