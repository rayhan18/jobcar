import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import '../../All Css/Main.css';
class SalsProduct extends Component {
    render() {
        return (
            <Fragment>
                <Container>

                    <h2 className="salsHeading"> ENTRY YOUR PRODUCT</h2>
                    <Row className="SalsProduct">
                        <Col>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="text" placeholder="Title" />
                                </Form.Group>




                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default SalsProduct;