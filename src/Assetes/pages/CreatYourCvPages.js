import React, {Component, Fragment} from 'react';
import CreatCv from "../Component/CreatCV/CreatCV";
import NavBar from "../Component/Navbar/NavBar";
import Footer from "../Component/footer/footer";

class CreatYourCvPages extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <CreatCv/>
                <Footer/>

            </Fragment>
        );
    }
}

export default CreatYourCvPages;