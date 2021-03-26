import React from 'react'
import { Container, Row,Col, Button,Accordion ,Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {faAngleDown, faArrowDown, faFilter} from '@fortawesome/free-solid-svg-icons'
export default function JobFilter() {
    return (
        <div className="border">
            <h5 className="ml-3"> <FontAwesomeIcon className="ml-3" icon={faFilter} />Filter</h5><hr></hr>
                       
                       {/* <Accordion defaultActiveKey="0">
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
                        </Accordion> */}

                        <p>Country <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /> </p><hr/>
                        <p>City <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p><hr/>
                        <p>Aria <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p><hr/>
                        <p>Industry <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p><hr/>
                        <p>Cereer Level <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p>
                       
        </div>
    )
}
