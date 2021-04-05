import React, { Component } from 'react'
import { Fragment } from 'react'
import { Navbar } from 'react-bootstrap'
import CvSearce from '../Component/CvSearce/CvSearce'
import Footer from '../Component/footer/Footer'
import NavBar from '../Component/Navbar/NavBar'

export default class CvSearchPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Fragment>
                <NavBar/>
                <CvSearce/>
                <Footer/>
            </Fragment>
        )
    }
}
