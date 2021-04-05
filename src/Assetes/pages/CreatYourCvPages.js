import React, {Component, Fragment} from 'react';
import CreatCv from "../Component/CreatCV/CreatCV";
import NavBar from "../Component/Navbar/NavBar";
import Footer from "../Component/footer/Footer";

class CreatYourCvPages extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
   
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