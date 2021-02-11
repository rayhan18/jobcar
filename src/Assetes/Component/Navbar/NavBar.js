import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../Images/apple.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className="navBarItem fixed-top" collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="#home"><img className="NavLogo" src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" navLink  mr-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Creat your CV</Nav.Link>
                            <Nav.Link href="#pricing">Post JOB</Nav.Link>

                            <NavDropdown title="Find Job" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                
                            </NavDropdown>
                           
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Register</Nav.Link>
                            <Nav.Link eventKey={2} href="/">
                                Login
                            </Nav.Link>
                            <FontAwesomeIcon icon={faBell} />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default NavBar;