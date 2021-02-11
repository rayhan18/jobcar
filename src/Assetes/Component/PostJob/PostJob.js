import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class PostJob extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h3 className="mt-5 mb-3 ml-5">Post Your Job</h3>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                            <Form className="bg-light p-4">

                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label className ="mr-3" column sm="3"> Job Title </Form.Label>
                                    <Form.Control  className="form-controlForm" type ="text" placeholder="Terget Job Title"/>
                                </Form.Group>

                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label className ="mr-3" column sm="3"> Company Name </Form.Label>
                                    <Form.Control className="form-controlForm" type ="text" placeholder="Company Name"/>
                                </Form.Group>

                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label  className="mr-3" column sm="3"> Category  </Form.Label>
                                    <Form.Control className="form-controlForm" type ="text" placeholder="Job category"/>
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
                                    <Form.Label className ="mr-3" column sm="3"> Phone Number </Form.Label>
                                    <Form.Control  className="form-controlForm" type ="text" placeholder="Phone number"/>
                                </Form.Group>

                                <Form.Group as = {Row}controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="mr-3" column sm="3">Example textarea </Form.Label>
                                    <Form.Control className="form-controlForm" as="textarea" rows="3" />
                                </Form.Group>




                                <Button  className =" buttonForm"variant="primary" size ="lg" type="submit">
                                    Submit
                                </Button>
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

export default PostJob;