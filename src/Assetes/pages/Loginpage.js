import React, { Component, Fragment } from 'react'
import Footer from '../Component/footer/Footer'
import Login from '../Component/Login/Login'
import NavBar from '../Component/Navbar/NavBar'

export default class Loginpage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <Login/>
                <Footer/>
            </Fragment>
        )
    }
}
