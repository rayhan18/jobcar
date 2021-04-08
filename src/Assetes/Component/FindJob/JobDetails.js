import React, { Component } from 'react'
import { Container,Row,Col,Media, Button,OverlayTrigger,Tooltip } from 'react-bootstrap'
import logo1 from '../../Images/logo1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faArrowDown, faBaby, faBell, faFilter, faShare} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class JobDetails extends Component {
constructor(){
    super()
    this.state={
        imgs:''
    }
}
    componentDidMount(){
        const url='https://jsonplaceholder.typicode.com/photos'
        axios.get(url).then(response=>{
            this.setState({imgs:response.data})
        }).catch(error=>{
            alert(error.message)
        })
    }
    render() {
     const   imgStyle={
        width:70,
        marginTop:'10px'
        }
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
             Job Alert
            </Tooltip>
          );
        return (
            <div>
                <Container >
                    <Row className="mt-5">
                        <Col  className="mt-5 contactus p-5" xs={12} sm={12} md={6} lg={8}>
                        <Media>
                        <img style={imgStyle} src={logo1} alt="logo" />
                            <Media.Body>
                                <h5 className="ml-1 mt-2"> Gulf Central</h5>
                                <p className="ml-1 mt-2"> Riyadh, Saudi Arabia Date Posted: Apr 1 </p>
                            </Media.Body>
                            </Media>
                            <Button variant="primary mt-1"><Link className="text-white" to="/emploayregister">Apply Now</Link> </Button>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                 <FontAwesomeIcon className="ml-3" icon={faBell} />
                              
                            </OverlayTrigger>,
                           
                                 <FontAwesomeIcon className="ml-3" icon={faShare} /><hr/>
                              <h5>Job Description</h5>
                           <p>The Supply Chain Manager (SCM) provides proactive leadership and strategic direction in the areas of operational planning and distribution planning and procurement planning. The SCM is responsible for all SC personnel, processes, systems, and system data, and for causing the optimal flow of products, and information and in a manner, which efficiently support the customer requirements.</p>
                         <h6>Primary duties and responsibilities are:</h6>
                         <ul>
                             <li>Plan and implement the overall supply chain strategy for warehouses and branches. </li>
                             <li>Plan and implement the overall supply chain strategy for warehouses and branches. </li>
                             <li>Plan and implement the overall supply chain strategy for warehouses and branches. </li>
                             <li>Plan and implement the overall supply chain strategy for warehouses and branches. </li>
                             <li>Plan and implement the overall supply chain strategy for warehouses and branches. </li>
                             <li>Plan and implement the overall supply chain strategy for warehouses and branches. </li>
                             <li>Plan and implement the overall supply chain strategy for warehouses and branches. </li>
                         </ul>
                         <p>Candidate Requirements:</p>
                         <ul>
                             <li>Strong verbal and written communication skills required.</li>
                             <li>Strong verbal and written communication skills required.</li>
                             <li>Strong verbal and written communication skills required.</li>
                             <li>Strong verbal and written communication skills required.</li>
                             <li>Strong verbal and written communication skills required.</li>
                             <li>Strong verbal and written communication skills required.</li>
                             <li>Strong verbal and written communication skills required.</li>
                         </ul>
                         <p>Education and Experience:</p>
                         <ul>
                             <li>Four-year degree from a University or College in Business Administration and/or related fields required.</li>
                             <li>An equivalent combination of education and experience will be considered.</li>
                             <li>Four-year degree from a University or College in Business Administration and/or related fields required.</li>
                            
                         </ul>
                  </Col>
                        <Col className="mt-5 contactus p-5" xs={12} sm={12} md={6} lg={4}>
                           <h5>Add</h5>                           
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
