import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container ,Row,Col} from 'react-bootstrap'

export default class AgenceList extends Component {
    render() {
        const cardStyle ={
            background:'#814AF4'
        }
        const cardDiv={
            background:'#643EB5',
            width:'200px',
            height:'250px'
           
        }
        return (
            <Fragment>
                <Container fluid={true} style={{background:'#9188F9'}}>
                    <h2 className="text-center">Jobs Through Top Recruitment Agencies</h2>
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} md={3} lg={3} style={cardStyle}>
                            <div style={cardDiv}>

                            </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} style={cardStyle}>
                            
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} style={cardStyle}>
                            
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} style={cardStyle}>
                            
                            </Col>
                        </Row>
                    </Container>

                </Container>
            </Fragment>
        )
    }
}
