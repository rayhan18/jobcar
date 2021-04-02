import React, { Component, Fragment } from 'react'
import { Container ,Row,Col,Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class RegisterHome extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h3 className="cvHeading2 text-center mb-3">Welcome to Register on Jobcar</h3>
                    <Row className="mb-5">
                        <Col xs={12} sm={12} md={6} lg={6}>
                              <Card>
                                <Card.Header className=" text-center" as="h5">Explore Full Range</Card.Header>
                                <Card.Body>
                                    <Card.Title>Hire Top Talent in World</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button  variant="primary "><Link style={{color:'white'}} to ="/companyregister">Company</Link> </Button>
                                </Card.Body>
                                </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <Card>
                            <Card.Header className=" text-center" as="h5">Great Candidates</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary"><Link style={{color:'white'}} to="/emploayregister">Job Seeker</Link></Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
