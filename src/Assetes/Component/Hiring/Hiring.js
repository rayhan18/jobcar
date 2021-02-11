import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import del from "../../Images/del.png";
import logo1 from "../../Images/logo1.jpg";
import apple from "../../Images/apple.jpg";
import logos from "../../Images/logo3.jpg";
import scholars from "../../Images/logo scholars.png";
import lode from "../../Images/download (1).jpg";
import {Button} from "react-bootstrap";

class Hiring extends Component {
    state = {
        display: true,
        width: 950,

    };
    render() {
        const settings = {
            autoplay:true,
            autoplaySpeed:4000,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1
        };



        return (
            <Fragment>
                <h2 className="hiringHeading">Who's Hiring on JOBCAR.com</h2>
                <Container className="carouselImg">


                    <div
                        style={{
                            width: this.state.width + "px",
                            display: this.state.display ? "block" : "none"
                        }}
                    >

<hr/>

                    <Slider {...settings}>

                        <div >

                            <img src={apple}/>
                        </div>
                        <div>
                            <img src={del}/>
                        </div>
                            <img src={logos}/>
                            <div>
                            <img src={logo1}/>
                            </div>
                            <img src={scholars}/>
                            <div>
                            <img src={lode}/>
                            </div>
                        <div>
                            <img src={logo1}/>
                        </div>


                    </Slider>
                        <hr/>
                    </div>
                </Container>

                <Button className="carouselBtn" variant="outline-primary">Is your company hiring ? join  4,000 over employer</Button>{' '}
            </Fragment>
        );
    }
}

export default Hiring;