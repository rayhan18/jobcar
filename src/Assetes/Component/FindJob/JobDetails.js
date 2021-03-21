import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container, Row,Col, Button,Accordion ,Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {faBrefcase} from '@fortawesome/free-solid-svg-icons'
export default class JobDetails extends Component {
    render() {
        const btnStyle={
            borderRadius:'20px'
        }
        return (
            <Fragment>
                <Container fluid={true} className="mt-5">
                    <Row className="mt-5 bg-light">
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <h5 className="mt-5"><FontAwesomeIcon icon={faCheckCircle}> </FontAwesomeIcon>Filter</h5>
                       
                                   <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Click me!
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Click me!
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                        </Col>
                        <Col xs={12} sm={6} md={9} lg={9}>
                           <div>
                               <h3> Jobs in Saudi Arabia</h3>
                               <p>6114 Jobs Found: Showing 1 - 20</p><hr/>
                               <div className='d-flex border-bottom p-1'>
                               <h3>Would you like receive more jobs similar to this search?</h3> <hr/>
                               <Button style ={btnStyle} className='outline-primary ml-auto'>creat job alert</Button> <hr/>
                              
                               </div>
                              <h5>Restaurant Manager</h5>
                              <p>Future Careers Middle East Freezone LLC - Riyadh Mar 21</p>
                              <p>Level:Mid Cereer</p>
                              <p>Our client, a high-end multi-brand Hospitality developer is hiring a Restaurant Manager   Based in their Riyadh Head office you will…</p>

                           </div><hr/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
