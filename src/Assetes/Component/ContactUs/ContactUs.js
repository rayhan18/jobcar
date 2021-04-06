import React, { Component, Fragment } from 'react'
import {Row,Container,Col,Button,Form} from 'react-bootstrap'
import cBanner from '../../Images/contactusbanner.jpg'
export default class ContactUs extends Component {
    render() {
        const rowStyle={
            marginTop: '120px',
           
        }
        return (
            <Fragment>
                <Container className="contactus" >
             
                    <Row style={rowStyle}>
                       <Col  xs={12} sm={12} md={6} lg={4}>
                       <h3 className="mt-5" >Contact Us</h3><hr/>
                       <h4>Email Addresses</h4>
                       <h5>Job Seekers</h5>
                       <p>For feedback and information regarding the website.</p>
                       
                      
                       <h5>Employers</h5>
                       <p>For feedback and information regarding the website.</p>
                      
                       
                       <h5>Career Services</h5>
                       <p>For feedback and information regarding the website.</p>
                       </Col>
                       
                       <Col style={rowStyle} xs={12} sm={12} md={6} lg={4}>
                       
                       <h5>Affiliate Program</h5>
                       <p>For feedback and information regarding the website.</p>
                     
                     
                       <h5>Online Advertising</h5>
                       <p>For feedback and information regarding the website.</p>
                     
                    
                       <h5>Job Seekers</h5>
                       <p>For feedback and information regarding the website.</p>
                       </Col>
                       <Col className="formStyle"  xs={12} sm={12} md={6} lg={4}>
                       <Form className="formStyle">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                       </Col>
                      
                       
                    </Row><hr/>
                    <h3 >Office Phone Numbers</h3><hr/>
                    
                <Row className="p-4">
              
              <Col  className=" p-2" xs={12} sm={12} md={6} lg={4}>
            
              <h4>International Queries</h4>
             
              <p>Tel: 0123456789</p>
              <p>Fex: 0123456789</p>
              <p>Working Houres: 9 AM - 6 PM (Sun to Thu)</p>
             
              </Col>
              <Col  xs={12} sm={12} md={6} lg={4}>
              <h5> United Arab Emirates - Dubai</h5>
              <p>Tel: 0123456789</p>
              <p>Fex: 0123456789</p>
              <p>Working Houres: 9 AM - 6 PM (Sun to Thu)</p>
             
              </Col>
              <Col  xs={12} sm={12} md={6} lg={4}>
              <h5> United Arab Emirates - Dubai</h5>
              <p>Tel: 0123456789</p>
              <p>Fex: 0123456789</p>
              <p>Working Houres: 9 AM - 6 PM (Sun to Thu)</p>
             
              </Col>

              </Row>
                </Container>
               
            </Fragment>
        )
    }
}
