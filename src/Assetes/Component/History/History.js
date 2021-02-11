import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import man from "../../Images/man s.jpg";

class History extends Component {
    render() {

        return (
            <Fragment>
                <Container>
                    <h2 className="TopRecurmentHeadig text-center">Success Stories</h2>
                    <Row>
                        <div>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={man} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>

                        </Col>
                        </div>
                        <div>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={man} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={man} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </div>
                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default History;
