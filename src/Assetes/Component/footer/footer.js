import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";

import {Col, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5 bg-light">
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <h4 className="mt-5">About jobcar.com</h4>
                            <p>jobcar.com is the leading job site in the Middle East and North Africa, connecting job seekers with employers looking to hire. Every day, thousands of new job vacancies are listed on the award-winning platform from the region's top employers.</p>
                                <h6>Follow jobcar.com</h6>

                        </Col>
                        <Col lg={2} md={2} sm={12}>
                          <h5 className="mt-5">Company</h5>
                            <div className="footerA">
                            <a href ="/"> home</a><br/>
                            <a href ="/"> about us</a>
                            <a href="/"> contact us</a>
                            <a href ="/"> prevecy policy</a>
                            <a href ="/"> blog</a>
                            </div>

            </Col>
                        <Col lg={2} md={2} sm={12}>
                            <h5 className="mt-5">quick link</h5>
                            <div className="footerA">
                            <a href ="/"> home</a><br/>
                            <a href ="/"> about us</a>
                            <a href ="/"href ="/"> contact us</a>
                            <a href ="/"> prevecy policy</a>
                            < a href ="/"> home</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
 <div className="copyRight">
 <p className="text-center">© 2000-2020 jobcar.com, Inc. All Rights Reserved. Terms of Use - Privacy Statement - Cookie Policy</p>
 </div>
            </Fragment>
        );
    }
}

export default Footer;