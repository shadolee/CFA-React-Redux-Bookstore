"use strict"
import React from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';

class Menu extends React.Component{
  render(){
    return(
      <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Australian College of Applied Psychology</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {/* <Nav>
        <NavItem eventKey={1} href="/about">About</NavItem>
        <NavItem eventKey={2} href="/contacts">Contact Us</NavItem>

      </Nav> */}
      <Nav pullLeft>
        <a href="/" class="navbar-left"><img width={50} height={50} src="https://dl.dropbox.com/s/s9deuhlx6erbb5q/AcapLogo.png"/></a>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/admin">Admin</NavItem>
        <NavItem eventKey={2} href="/cart">Your Cart
          { (this.props.cartItemsNumber > 0)?( // if # of items in cart is > 0
            <Badge className="badge">
            {this.props.cartItemsNumber}</Badge>):('')}
            {/* display the # of items in cart, if zero items, display nothing  :{''} */}
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}
}
export default Menu
