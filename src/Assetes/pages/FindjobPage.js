import React, { Component ,Fragment} from 'react'
import FindJob from '../Component/FindJob/FindJob'
import NavBar from "../Component/Navbar/NavBar";
import Footer from "../Component/footer/footer";
import FindJobMain from "../Component/FindJobMain/FindJobMain";
import JobDetails from '../Component/FindJob/JobDetails';
export default class FindjobPage extends Component {
    render() {
        return (
           
                <Fragment>
                <NavBar/>
               <JobDetails/>
               {/* <FindJob/>
               <FindJobMain/> */}
                <Footer/>

            </Fragment>
           
        )
    }
}
