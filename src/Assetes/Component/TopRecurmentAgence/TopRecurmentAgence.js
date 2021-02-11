import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import com1 from "../../Images/apple.jpg";

class TopRecurmentAgence extends Component {
    render() {


        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };


        return (
            <Fragment>
                <Container>
                    <h2 className=" TopRecurmentHeadig text-center">Jobs Through Top Recruitment Agencies</h2>

                        <div>
                            <Slider {...settings}>
                                <div className="text-center mt-5">

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={com1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                       props subject
                                        jobs (24)
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                                </div>
                                <div className="text-center mt-5">

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={com1} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            props subject
                                            jobs (24)
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                                </div>
                                <div className="text-center mt-5">

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={com1} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            props subject
                                            jobs (24)
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                                </div>
                                <div className="text-center mt-5">

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={com1} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            props subject
                                            jobs (24)
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                                </div>
                            </Slider>
                        </div>


                </Container>
                <div className="agency">
                <h2>Are you a recruitment agency?</h2>
                <p>Stand out to job seekers on our website by actively posting your job vacancies.
                    Help your business get great exposure and fill your job openings through Jobscar.com's high-traffic website and mailers.</p>
                </div>
            </Fragment>
        );
    }
}

export default TopRecurmentAgence;