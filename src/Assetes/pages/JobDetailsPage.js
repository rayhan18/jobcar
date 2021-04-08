import React, { Component } from 'react'
import NavBar from "../Component/Navbar/NavBar";

import Footer from "../Component/footer/Footer";
import JobDetails from '../Component/FindJob/JobDetails';


export default class  extends Component {
    render() {
        return (
            <div>
               <NavBar/>
                <JobDetails/>

                <Footer/>
            </div>
        )
    }
}
