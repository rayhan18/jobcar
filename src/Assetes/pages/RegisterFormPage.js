import React, { Component, Fragment } from 'react'
import Footer from '../Component/footer/Footer'
import NavBar from '../Component/Navbar/NavBar'
import RegisterForm from '../Component/Register/RegisterForm'

export default class RegisterFormPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                 <RegisterForm/>
               
               
                <Footer/>
            </Fragment>
        )
    }
}
