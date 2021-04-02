import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../Images/apple.jpg";
import {NavLink,Link} from 'react-router-dom'


class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className="navBarItem fixed-top" collapseOnSelect expand="lg" >
                    <Navbar.Brand href="#home"><img className="NavLogo" src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" navLink  mr-auto ">
                            <Nav.Link  > <NavLink to='/'> Home</NavLink></Nav.Link>
                            <Nav.Link > <NavLink to='/register'> Creat your CV</NavLink></Nav.Link>
                            <Nav.Link ><Link to ="/postjob">Post JOB</Link> </Nav.Link>
                            <Nav.Link > <Link to ="/findjob">Find Job</Link></Nav.Link>
                            <Nav.Link > <Link to ="/cvservice">Cv search</Link></Nav.Link>
                           
                        </Nav>
                        <Nav>
                            <Nav.Link><Link to="#">Contact Us</Link></Nav.Link>
                            <Nav.Link><Link to="/login"> Login</Link></Nav.Link>
                            <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default NavBar;