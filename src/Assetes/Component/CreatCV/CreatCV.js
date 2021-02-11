import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class CreatCv extends Component {
    render() {
        var btns={marginLeft:"65px"}
        return (
            <Fragment>
                <Container>
                    <h3 className="cvHeading mb-3">Create a Free Account</h3>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <Form className="bg-light p-4">
                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label className ="mr-3" column sm="3"> Fast Name </Form.Label>
                                    <Form.Control className="form-controlForm" type ="text" placeholder="Enter your fast Name"/>
                                </Form.Group>

                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label  className="mr-3" column sm="3"> Last Name  </Form.Label>
                                <Form.Control className="form-controlForm" type ="text" placeholder="enter your last name"/>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formBasicEmail">
                                    <Form.Label className="mr-3" column sm="3">Email Add </Form.Label>
                                    <Form.Control  className="form-controlForm" type="email" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group as ={Row}controlId="formBasicPassword">
                                    <Form.Label className="mr-3" column sm="3">Password  </Form.Label>
                                    <Form.Control className="form-controlForm" type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label className ="mr-3" column sm="3"> Job Title </Form.Label>
                                    <Form.Control as="select">
                                        <option>Accounting and auditing</option>
                                        <option>administration</option>
                                        <option>architecture</option>
                                        <option>banking</option>
                                        <option>Beauty and faction</option>
                                        <option>Accounting and auditing</option>
                                        <option>administration</option>
                                        <option>architecture</option>
                                        <option>banking</option>
                                        <option>Beauty and faction</option>
                                        <option>Accounting and auditing</option>
                                        <option>administration</option>
                                        <option>architecture</option>
                                        <option>banking</option>
                                        <option>Beauty and faction</option>
                                    </Form.Control>

                                </Form.Group>

                                <Form.Group as = {Row}controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="mr-3" column sm="3">Example textarea </Form.Label>
                                    <Form.Control className="form-controlForm" as="textarea" rows="3" />
                                </Form.Group>

                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Make my profile public to increase my visibility to  employers ${type}`}
                                        />


                                    </div>
                                ))}


                                <Button  className =" buttonForm"variant="primary" size ="lg" type="submit" style={{marginLeft:"65px"}}>
                                    process to build your cv
                                </Button>
                                <p>By registering, you confirm that you have read and agree to  jobcar.com <a href="#">Terms and Conditions of Use</a> and <a href="#">Privacy Policy.</a></p>
                            </Form>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h3> YOUR CHOESE FILD </h3>
                            <p>jobcar.com is the leading job site in the Middle East and North Africa, connecting job seekers with employers looking to hire. Every day, thousands of new job vacancies are listed on the award-winning platform from the region's top employers.</p>

                        </Col>
                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default CreatCv;