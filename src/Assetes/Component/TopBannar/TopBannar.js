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
                      <Col >
                          <h1 className="contentH1">FIND JOBS, NETWORK AND LEARN</h1>
                          <h5 className="text-white">Join the Populer Job Site</h5>
                          
                      </Col>
                  </Row>
                  <Row className="formStyle">
                  <Col>
                 <Form className="formControl">
                    <Form.Row className="formControl">
                    <Form.Group as={Col} controlId="formGridTitle">
                   
                    <Form.Control type="text" placeholder="Enter Job Title" />
                    </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                       
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>City</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                       
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Country</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                        <Form.Group id="formGridCheckbox">
                             <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form.Group>

  
                     </Form.Row>
                  </Form>
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
