import React, { Component, Fragment } from 'react'
import {Row,Container,Col} from 'react-bootstrap'
import cBanner from '../../Images/contactusbanner.jpg'
export default class ContactUs extends Component {
    render() {
        const rowStyle={
            marginTop: '50px',
           
        }
        return (
            <Fragment>
                <Container>
                    <Row style={rowStyle}>
                       <Col style={rowStyle} xs={12} sm={12} md={6} lg={4}>
                       <h3>Contact Us</h3>
                       <h4>Email Addresses</h4>
                       <h5>Job Seekers</h5>
                       <p>For feedback and information regarding the website.</p>
                       
                      
                       <h5>Employers</h5>
                       <p>For feedback and information regarding the website.</p>
                      
                       
                       <h5>Career Services</h5>
                       <p>For feedback and information regarding the website.</p>
                       </Col>
                       
                       <Col style={{ marginTop: '100px'}} xs={12} sm={12} md={6} lg={4}>
                       
                       <h5>Affiliate Program</h5>
                       <p>For feedback and information regarding the website.</p>
                     
                     
                       <h5>Online Advertising</h5>
                       <p>For feedback and information regarding the website.</p>
                     
                    
                       <h5>Job Seekers</h5>
                       <p>For feedback and information regarding the website.</p>
                       </Col>
                        
                       
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
