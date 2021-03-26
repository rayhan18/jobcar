import React, { Component ,Fragment} from 'react'
import FindJob from '../Component/FindJob/FindJob'
import NavBar from "../Component/Navbar/NavBar";
import Footer from "../Component/footer/footer";
import FindJobMain from "../Component/FindJobMain/FindJobMain";
import JobDetails from '../Component/FindJob/JobDetails';
import logo1 from '../Images/logo1.jpg'

export default class FindjobPage extends Component {

    
    render() {
        const images=[
            {image:{logo1}},
            {image:{logo1}},
            {image:{logo1}},
            {image:{logo1}},
            {image:{logo1}},
            {image:{logo1}}
        ]
        return (
           
                <Fragment>
                <NavBar/>
                {
                    images.map(image=><JobDetails image= {image}></JobDetails> )
                }
            //    <JobDetails imag={logo1}/>
               {/* <FindJob/>
               <FindJobMain/> */}
                <Footer/>

            </Fragment>
           
        )
    }
}
