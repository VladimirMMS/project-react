import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import {NavLink} from 'react-router-dom'


function Navigaction() {
    return (
        <Navbar collapseOnSelect expand = "lg" variant = "dark" bg="dark">

            <Navbar.Brand as={NavLink} to="/">Task Manager</Navbar.Brand>
                
           
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id = "responsive-navbar-nav">
                <Nav className = "mr-auto">
                    <Nav.Link as= {NavLink} to="projects">
                        Projects
                    </Nav.Link>
                    <NavDropdown title = "Admin">
                        <Nav.Item as={NavLink} to="/admin/users">
                            Users
                        </Nav.Item>
                    </NavDropdown>   
                </Nav>
                <Nav className = "mx-auto">
                    <Nav.Link as={NavLink} to="/login">
                        Login
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/register">
                        Register
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/account">
                        Account
                    </Nav.Link>
                </Nav>


            </Navbar.Collapse>
           
            
        </Navbar>
    );
}

export default Navigaction;