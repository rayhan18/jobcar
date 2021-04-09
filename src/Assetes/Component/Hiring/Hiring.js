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
import {Link} from 'react-router-dom'

class Hiring extends Component {
    
    render() {
        const settings = {
            autoplay:true,
            autoplaySpeed:4000,
            dots: false,
            infinite: true,
            speed: 3000,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
              ]
        };

        const containerStyle={
            background:'#9CA0F9',
            padding:'20px'
        }

        return (
            <Fragment>
                <Container fluid={true} style={containerStyle} >
                <h2 className="hiringHeading">Who's Hiring on JOBCAR.com</h2>
                <Container fluid={true} className="carouselImg">

                <hr/>
                    <div>
                        
                       
                    <Slider {...settings}>

                        <div className="container">

                         <Link to="#"><img style={{width:'150px',marginRight:'10px'}}src={lode}/> </Link>   
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

                <Button  variant="outline-primary bg-white carouselBtn"> <strong className="text-info">Is your company hiring ?</strong><span style={{color:'tomato'}}>  join  4,000 over employer Jobscar.com</span></Button>{' '}
                </Container>
            </Fragment>
        );
    }
}

export default Hiring;