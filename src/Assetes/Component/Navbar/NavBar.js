import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../Images/joblogo.png";
import {NavLink,Link} from 'react-router-dom'


class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className="navBarItem fixed-top" collapseOnSelect expand="lg" >
                    <Navbar.Brand href="#home"><img className="NavLogo" src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" navLink  mr-auto"  >
                            <Nav.Link  as={Link}  className="text-white" to='/'> Home</Nav.Link>
                            <Nav.Link  as={Link}  className="text-white" to='/register'> Creat your CV</Nav.Link>
                            <Nav.Link as={Link} className="text-white"to ="/postjob">Post JOB </Nav.Link>
                            <Nav.Link  as={Link}  className="text-white" to ="/findjob">Find Job</Nav.Link>
                            <Nav.Link   as={Link} className="text-white" to ="/cvservice">Cv search</Nav.Link>
                           
                </Nav>
                        <Nav>
                            <Nav.Link as={Link}  className="text-white" to="/contactus">Contact Us</Nav.Link>
                            <Nav.Link as={Link} className="text-white" to="/login"> Login</Nav.Link>
                            <Nav.Link as={Link} className="text-white" to="/register">Register</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default NavBar;