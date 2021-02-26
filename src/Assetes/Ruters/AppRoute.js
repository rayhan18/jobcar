import React, { Component } from 'react'
import { Fragment } from 'react'
import { Switch, Route } from "react-router-dom";
import HomePages from '../pages/HomePages';
export default class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                
                <Switch>
                   
                    <Route exact path="/" component={HomePages}/>
                </Switch>
                
            </Fragment>
        )
    }
}
