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
    
    render() {
        const settings = {
            autoplay:true,
            autoplaySpeed:4000,
            dots: false,
            infinite: true,
            speed: 3000,
            slidesToShow: 5,
            slidesToScroll: 1
        };



        return (
            <Fragment>
                <h2 className="hiringHeading">Who's Hiring on JOBCAR.com</h2>
                <Container className="carouselImg">

                <hr/>
                    <div>
                        
                       
                    <Slider {...settings}>

                        <div className="container">

                            <img style={{width:'150px',marginRight:'10px'}}src={lode}/>
                        </div>
                        <div>
                        <img style={{width:'150px',marginRight:'10px'}}src={logo1}/>
                        </div>
                        <div>
                        <img style={{width:'150px',marginRight:'10px'}}src={lode}/>
                        </div>
                        <div>
                        <img style={{width:'150px',marginRight:'10px'}}src={logos}/>
                        </div>
                        <div>
                        <img style={{width:'150px',marginRight:'10px'}}src={lode}/>
                        </div>
                        <div>
                        <img style={{width:'150px',marginRight:'10px'}}src={del}/>
                        </div>
                        <div>
                        <img style={{width:'150px',marginRight:'10px'}}src={lode}/>
                        </div>
                        

                    </Slider>
                        <hr/>
                    </div>
                </Container>

                <Button className=" " variant="outline-primary ml-auto mr-auto carouselBtn">Is your company hiring ? join  4,000 over employer</Button>{' '}
            </Fragment>
        );
    }
}

export default Hiring;