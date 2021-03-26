import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container, Row,Col, Button,Accordion ,Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {faBrefcase} from '@fortawesome/free-solid-svg-icons'
import Jobcart from './Jobcart';
import JobFilter from './JobFilter';

export default class JobDetails extends Component {
    constructor(props){
        super(props)
    }
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
                       
                                   <JobFilter>
                                       
                                   </JobFilter>
                        </Col>
                        <Col xs={12} sm={6} md={9} lg={9}>
                           <div>
                               <h3> Jobs in Saudi Arabia</h3>
                               <p>6114 Jobs Found: Showing 1 -20</p><hr/>
                               <div className='d-flex border-bottom p-1'>
                               <h3>Would you like receive more jobs similar to this search?</h3> <hr/>
                               <Button style ={btnStyle} className='outline-primary ml-auto'>creat job alert</Button> <hr/>
                              
                               </div>
                              <Jobcart >
                               
                              </Jobcart>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
