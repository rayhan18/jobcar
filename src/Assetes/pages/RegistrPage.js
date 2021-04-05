import React, { Component, Fragment } from 'react'
import Footer from '../Component/footer/Footer'
import Hiring from '../Component/Hiring/Hiring'
import NavBar from '../Component/Navbar/NavBar'
import AgenceList from '../Component/RecuarmentAgence/AgenceList'
import Register from '../Component/Register/Register'
import RegisterHome from '../Component/Register/RegisterHome'

export default class RegistrPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Fragment>
                <NavBar/>
                 <RegisterHome/>
                 <Hiring/>
                <AgenceList/>
                <Footer/>
            </Fragment>
        )
    }
}
