import React, { Component } from 'react'
import { Fragment } from 'react'
import { Switch, Route } from "react-router-dom";
import CreatYourCvPages from '../pages/CreatYourCvPages';
import HomePages from '../pages/HomePages';
import PostJobpages from '../pages/PostJobPages'
import FindjobPage from '../pages/FindjobPage'
import RegistrPage from '../pages/RegistrPage';
import RegisterFormPage from '../pages/RegisterFormPage';
import Loginpage from '../pages/Loginpage';
import CvSearchPage from '../pages/CvSearchPage';
import ContactUsPage from '../pages/ContactUsPage';

export default class AppRoute extends Component {
     
    render() {
        return (
            <Fragment>
                
                <Switch>
                   
                    <Route exact path="/" component={HomePages}/>
                    {/* <Route exact path="/register" component={CreatYourCvPages}/> */}
                    <Route exact path="/postjob" component={PostJobpages}/>
                    <Route exact path="/findjob" component={FindjobPage}/>
                    <Route exact path="/register" component={RegistrPage}/>
                    <Route exact path="/companyregister" component={RegisterFormPage}/>
                    <Route exact path="/emploayregister" component={CreatYourCvPages}/>
                    <Route exact path="/login" component={Loginpage}/> 
                    <Route exact path="/cvservice" component={CvSearchPage}/> 
                    <Route exact path="/contactus" component={ContactUsPage}/> 
                </Switch>
                
            </Fragment>
        )
    }
}
