import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { NavLink as NLink } from "react-router-dom";

const MainNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar className="mb-3" color="dark" dark expand="sm">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto justify-content-center" navbar>
            <NavItem className="mx-2">
              <NavLink onClick={toggle} tag={NLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={toggle} tag={NLink} to="/users">
                Users
              </NavLink>
            </NavItem>

            <NavItem className="mx-2">
              <NavLink onClick={toggle} tag={NLink} to="/posts">
                Posts
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default MainNavBar;
