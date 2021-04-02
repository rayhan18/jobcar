import React, {Component, Fragment} from 'react';
import NavBar from "../Component/Navbar/NavBar";
import TopBannar from "../Component/TopBannar/TopBannar";
import PopulerSerch from "../Component/PopulerSerch/PopulerSerch";

import Footer from "../Component/footer/Footer";
import PostJob from "../Component/PostJob/PostJob";

class PostJobPages extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <TopBannar/>
                <PostJob/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PostJobPages;