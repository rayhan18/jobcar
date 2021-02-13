import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'
export default function findJobs() {
    return (
        <div>
            <h1> test functional coponent</h1>
            <card></card>
            <card></card>
        </div>
    )
}
function card(){
    return(
        <Row>
            <Col sm={12} md={6} lg={2}>
                            <Card className ="cardBox">
                                <Card.Body>
                                    <Card.Title>1530</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>

                                    <Card.Link href="#">Card Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
        </Row>
    )
}