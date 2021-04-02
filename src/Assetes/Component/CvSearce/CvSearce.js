import React, { Component, Fragment } from 'react'
import {Container, Row,Col} from 'react-bootstrap'
export default class CvSearce extends Component {
    render() {
        const headerStyle={
            background:''
        }
        return (
            <Fragment>
                <Container fluid={true} className="mt-5 cvHeader">
                   <Row  className=" cvHeader">
                   <Col className="text-center mt-5">
                       
                   <h2>Jobcar.com CV Search</h2>
                    <p>Find the perfect candidate.</p>
                    <p>Try it for free. No credit card required.</p>
                   </Col>
                    <Col className="wrap image type-a cvHeader">
                    
                    </Col>
                   </Row>
                </Container>
                {/* <Container>

                    <Row>
                        <Col>
                        <h2>Jobar.com CV Search</h2>
                        </Col>
                    </Row>
                </Container> */}
            </Fragment>
        )
    }
}
