import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../Images/apple.jpg";



class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className="navBarItem fixed-top" collapseOnSelect expand="lg" >
                    <Navbar.Brand href="#home"><img className="NavLogo" src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" navLink  mr-auto ">
                            <Nav.Link href="#features" >Home</Nav.Link>
                            <Nav.Link href="#pricing">Creat your CV</Nav.Link>
                            <Nav.Link href="#pricing">Post JOB</Nav.Link>
                            <Nav.Link href="#pricing">Find Job</Nav.Link>

                            
                           
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Register</Nav.Link>
                            <Nav.Link eventKey={2} href="/">
                                Login
                            </Nav.Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default NavBar;