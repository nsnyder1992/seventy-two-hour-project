import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/">React Library</NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink href="https:github.com/nsnyder1992/seventy-two-hour-project">
              Github
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
