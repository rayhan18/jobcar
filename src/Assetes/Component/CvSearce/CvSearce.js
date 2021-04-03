import React, { Component, Fragment } from 'react'
import {Container, Row,Col} from 'react-bootstrap'
import JobFilter from '../FindJob/JobFilter'
import PopulerSerch from '../PopulerSerch/PopulerSerch'
import CvCard from './CvCard'

export default class CvSearce extends Component {




   
    render() {
        const headerStyle={
            background:''
        }
        const sidebarStyle={
            height: 600,
            overflow: 'auto',
           
        }
        
        

        return (
            <Fragment>
                <Container fluid={true} className="mt-5 cvHeader">
                   <Row  className=" cvHeader">
                   <Col className="text-center mt-5">
                       <h2 className="text-white bg-primary p-2">Choose your CV template</h2>
                   <h2>Jobcar.com </h2>
                    <p>Find the perfect candidate.</p>
                    <p>Try it for free. No credit card required.</p>
                   </Col>
                    <Col className="wrap image type-a cvHeader">
                    
                    </Col>
                   </Row>
                </Container>
                <Container fluid={true}>
                    <Row>
                    <Col style={sidebarStyle} xs={12} sm={12} md={4} lg={3}>
                       <PopulerSerch  title="Popular Searches in World" />
                        </Col>
                        <Col  xs={12} sm={12} md={9} lg={9}>
                        <CvCard/>
                            <CvCard />
                            <CvCard/>
                        </Col>
                    </Row>
                   
                   
                </Container>
            </Fragment>
        )
    }
}
