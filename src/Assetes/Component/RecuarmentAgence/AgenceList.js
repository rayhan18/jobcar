import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container ,Row,Col,Button,Card} from 'react-bootstrap'
import creativeLogo from '../../Images/creativeLogo.jpg'
import LogoBismi from '../../Images/logoBismi.jpg'
import LogoInternet from '../../Images/InternetLogo.jpg'
import LogoDesign from '../../Images/LogoDesign1.jpg'

export default class AgenceList extends Component {
    render() {
        
       
        const containarStyle={
            background:'#9188F9',
            
        }
        return (
            <Fragment>
                <Container fluid={true} style={containarStyle}>
               
                    <Container className="">
                    <h2 className="text-center text-white p-5 ">Jobs Through Top Recruitment Agencies</h2>
                        <Row>

                            <Col xs={12} sm={6} md={3} lg={3} >
                           
                                   <Card style={{ width: '18rem', border:'5px solid lightgrea' }}>
                                <Card.Img variant="top" src={creativeLogo} />
                                <Card.Body>
                                    <Card.Title className="text-center">Job post 16</Card.Title>
                                   
                                </Card.Body>
                                </Card>
                                                          
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img style={{    height: '216px'}} variant="top" src={LogoDesign} />
                                <Card.Body>
                                    <Card.Title className="text-center">Job post 12</Card.Title>
                                    
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img  style={{    height: '216px'}}variant="top" src={LogoBismi} />
                                <Card.Body>
                                    <Card.Title className="text-center">Job post 19</Card.Title>
                                    
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img style={{    height: '216px'}} variant="top" src={LogoInternet} />
                                <Card.Body>
                                    <Card.Title className="text-center">Job post 25</Card.Title>
                                   
                                  
                                </Card.Body>
                                </Card>
                            </Col>
                            <Button className="btn-outline border mx-auto btn-lg mt-3 rounded-5 mb-5">View More</Button>
                        </Row>
                    </Container>

                </Container>
            </Fragment>
        )
    }
}
