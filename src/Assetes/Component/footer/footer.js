import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom'
import {Col, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        const footerStyle={
            marginLeft:20,
            marginRight:20,
           
            padding: 10
        }
        return (   
            <Fragment>
                <Container fluid={true} style={{ background: '#061b82',marginTop:'5px'}} >
                    <Row style={footerStyle}>
                        <Col lg={8} md={8} sm={12}>
                            <h4 className="mt-5 text-white">About jobcar.com</h4>
                            <p  className=" text-white">jobcar.com is the leading job site in the Middle East and North Africa, connecting job seekers with employers looking to hire. Every day, thousands of new job vacancies are listed on the award-winning platform from the region's top employers.</p>
                                <h6  className=" text-white">Follow jobcar.com</h6>

                        </Col>
                        <Col lg={2} md={2} sm={12}>
                          <h5 className="mt-5 text-white">Company</h5>
                            <div className="footerA">
                          <li className="  text-white">  <Link  to ="/"> home</Link></li>
                            <li className="  text-white"><Link to ="/"> about us</Link></li>
                           <li className="  text-white"> <Link to="/"> contact us</Link></li>
                           <li className="  text-white"> <Link to ="/"> prevecy policy</Link></li>
                           <li className="  text-white"><Link to ="/"> blog</Link></li>
                            </div>

            </Col>
                        <Col lg={2} md={2} sm={12}>
                            <h5 className="mt-5 text-white">quick link</h5>
                            <div className="footerA">
                           <li className="  text-white"> <Link to ="/"> home</Link></li>
                           <li className="  text-white"> <Link to ="/"> about us</Link></li>
                            <li className="  text-white"><Link to ="/"href ="/"> contact us</Link></li>
                           <li className="  text-white"> <Link to ="/"> prevecy policy</Link></li>
                           <li className="  text-white"> <Link  to ="/"> home</Link></li>
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