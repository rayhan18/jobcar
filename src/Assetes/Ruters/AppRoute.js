import React, { Component } from 'react'
import { Fragment } from 'react'
import { Switch, Route } from "react-router-dom";
import CreatYourCvPages from '../pages/CreatYourCvPages';
import HomePages from '../pages/HomePages';
import PostJobpages from '../pages/PostJobPages'

export default class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                
                <Switch>
                   
                    <Route exact path="/" component={HomePages}/>
                    <Route exact path="/creatcv" component={CreatYourCvPages}/>
                    <Route exact path="/postjob" component={PostJobpages}/>
                </Switch>
                
            </Fragment>
        )
    }
}
