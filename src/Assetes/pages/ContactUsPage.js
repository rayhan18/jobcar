import React, { Component } from 'react'
import ContactUs from '../Component/ContactUs/ContactUs'
import Footer from '../Component/footer/Footer'
import  NavBar  from '../Component/Navbar/NavBar'

export default class  extends Component {
    render() {
        return (
            <div>
                
                <NavBar/>
                <ContactUs/>
                <Footer/>
            </div>
        )
    }
}
