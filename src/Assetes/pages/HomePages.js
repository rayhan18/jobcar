import React, {Component, Fragment} from 'react';
import NavBar from "../Component/Navbar/NavBar";
import TopBannar from "../Component/TopBannar/TopBannar";
import PopulerSerch from "../Component/PopulerSerch/PopulerSerch";
import FindJob from "../Component/FindJob/FindJob";
import Register from "../Component/Register/Register";
import Footer from "../Component/footer/Footer";
import Hiring from "../Component/Hiring/Hiring";
import History from "../Component/History/History";
import FindJobMain from "../Component/FindJobMain/FindJobMain";
import PostJob from "../Component/PostJob/PostJob";
import AgenceList from '../Component/RecuarmentAgence/AgenceList';


class HomePages extends Component {
    render() {

        return (
            <Fragment>
                <NavBar/>
                <TopBannar/>
                <PopulerSerch/>
               
                <FindJob/>
              
                 <Hiring/>
                <AgenceList/>

                <Footer/>

            </Fragment>
        );
    }
}

export default HomePages;