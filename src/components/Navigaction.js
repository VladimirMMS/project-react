import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import {NavLink} from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';


function Navigaction() {

    const {logout,user} = useAuth();
    return (
        <Navbar collapseOnSelect expand = "lg" variant = "dark" bg="dark">

            <Navbar.Brand as={NavLink} to= {routes.home}>Task Manager</Navbar.Brand>
                
           
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id = "responsive-navbar-nav">
                <Nav className = "mr-auto">
                    <Nav.Link as= {NavLink} to={routes.projects}>
                        Projects
                    </Nav.Link>
                    <NavDropdown title = "Admin">
                        <Nav.Item as={NavLink} to={routes.admin.users}>
                            Users
                        </Nav.Item>
                    </NavDropdown>   
                </Nav>
                <Nav className = "mx-auto">
                    <Nav.Link as={NavLink} to={routes.login}>
                        Login
                    </Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register}>
                        Register
                    </Nav.Link>

                    <Nav.Link as={NavLink} to={routes.account}>
                        Account
                    </Nav.Link>
                    {user ?<Nav.Link to={routes.login} onClick= {logout}>
                        Logout
                    </Nav.Link>:""}
                    
                </Nav>


            </Navbar.Collapse>
           
            
        </Navbar>
    );
}

export default Navigaction;