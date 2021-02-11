import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, FormControl, InputGroup, Navbar, Row} from "react-bootstrap";
import '../../All Css/Main.css';
class TopBannar extends Component {
    render() {
        return (
            <Fragment>
            <Container fluid={true} className="TopBennar">
              <Container className="topContent">
                  <Row>
                      <Col>
                          <h1 className="contentH1">FIND JOBS, NETWORK AND LEARN</h1>
                          <h5 className="text-white">Join the Middle East's #1 Job Site</h5>
                          <Navbar className="bg-light justify-content-between">
                             <Form inline>
                                 <FormControl TYPE ="TEXT" PLACEHOLDER="jOB Title"/>
                             </Form>
                              <Form inline>
                                  <FormControl type="text" placeholder="City" className=" mr-sm-2" />
                              </Form>
                                  <Form inline>

                                      <FormControl type="text" placeholder="country name" className=" mr-sm-2" />
                                  <Button type="submit">Submit</Button>
                              </Form>
                          </Navbar>
                      </Col>
                  </Row>

              </Container>
            </Container>
            </Fragment>
    )
        ;
    }
}

export default TopBannar;
