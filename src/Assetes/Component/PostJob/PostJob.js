import { faRing } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row,Accordion,Card} from "react-bootstrap";
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import calCenter from '../../Images/callCenter.png'

class PostJob extends Component {
    constructor(){
        super()
        this.state={
            jobTitle:'',
            companyN:'',
            category:'',
            email:'',
            password:'',
            pNumber:'',
            jobTitleError:'',
            companyNError:'',
            categoryError:'',
            emailError:'',
            passwordError:'',
            pNumberError:''
        }
        this.fromValidation=this.fromValidation.bind(this)
    }
    fromValidation(){
        const jobTitle = this.state.jobTitle
        const companyN = this.state.companyN
         const category = this.state.category
         const  email = this.state.email
         const password = this.state.password
         const  pNumber = this.state.pNumber
         if(jobTitle===''){
             this.setState({jobTitle:'please enter job title'})
         }else if(companyN===''){
             this.setState({companyN:'please enter company name'})
         }else if(category===''){
             this.setState({category:'please enter category name'})
         }else if(email===''){
             this.setState({email:'please enter email'})
         }else if(password===''){
             this.setState({password:'please enter your password'})
         }else if(pNumber===''){
             this.setState({pNumber:'please enter Your phone number'})
         }

    }
    render() {
        const errorText={
            marginLeft:'150px',
            color:'red'
        }
        const formStyle={
            boxShadow: '1px 8px 8px 8px #888888'
        }
        return (
            <Fragment>
                 <h3 className="mt-5 mb-3 cvHeading text-center">Post Your Job</h3>
                <Container>
                   
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                            <Form className="bg-light p-4" style={formStyle}>

                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label className ="mr-3" column sm="3"> Job Title </Form.Label>
                                    <Form.Control onChange={(e)=>this.setState({jobTitle:e.target.value})} value={this.state.jobTitle} className="form-controlForm" type ="text" placeholder="Terget Job Title"/>
                                    <small  style={errorText}>{this.state.jobTitleError}</small>
                                </Form.Group>

                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label className ="mr-3" column sm="3">  Name </Form.Label>
                                    <Form.Control onChange={(e)=>this.setState({  companyN:e.target.value})} value={this.state.companyN}  className="form-controlForm" type ="text" placeholder="Company Name"/>
                                    <small  style={errorText}>{this.state.companyNError}</small>
                                </Form.Group>

                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label onChange={(e)=>this.setState({ category:e.target.value})} value={this.state.category}  className="mr-3" column sm="3"> Category  </Form.Label>
                                    <Form.Control className="form-controlForm" type ="text" placeholder="Job category"/>
                                    <small  style={errorText}>{this.state.categoryError}</small>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formBasicEmail">
                                    <Form.Label className="mr-3" column sm="3">Email Add </Form.Label>
                                    <Form.Control  className="form-controlForm" type="email" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group as ={Row}controlId="formBasicPassword">
                                    <Form.Label onChange={(e)=>this.setState({ password:e.target.value})} value={this.state.password} className="mr-3" column sm="3">Password  </Form.Label>
                                    <Form.Control className="form-controlForm" type="password" placeholder="Password" />
                                    <small  style={errorText}>{this.state.passwordError}</small>
                                </Form.Group>

                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label className ="mr-3" column sm="3"> Phone Number </Form.Label>
                                    <Form.Control  className="form-controlForm" type ="text" placeholder="Phone number"/>
                                </Form.Group>

                                <Form.Group as = {Row}controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="mr-3" column sm="3">Example textarea </Form.Label>
                                    <Form.Control className="form-controlForm" as="textarea" rows="3" />
                                </Form.Group>




                                <Button onClick={this.fromValidation} className =" buttonForm"variant="primary btn-block" size ="lg" type="button">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h3> Hire Top Talent in World </h3>
                            <h5 className="text-warning"> Join 40,000+ companies hiring on Jobcar.com</h5><hr/>
                            <p>Access the largest CV database in the world, post your jobs, and find employees in world</p>
                            <h6>Why Choose Jobcar ?</h6>
                            <p className="ml-5"> <FontAwesomeIcon icon  ={faCheckCircle} className="text-success"/> More than 40 million CVs.</p>
                            <p className="ml-5"> <FontAwesomeIcon icon  ={faCheckCircle} className="text-success"/> AI-powered recruitment technology,</p>
                            <p className="ml-5"> <FontAwesomeIcon icon  ={faCheckCircle} className="text-success"/> saving you time and effort!</p>
                            <p className="ml-5"> <FontAwesomeIcon icon  ={faCheckCircle} className="text-success"/> 7 Million visits per month, </p>
                            <p className="ml-5"> <FontAwesomeIcon icon  ={faCheckCircle} className="text-success"/> giving your jobs maximum visibility.</p>
                            <p className="ml-5"> <FontAwesomeIcon icon  ={faCheckCircle} className="text-success"/> Dedicated customer support from our 12 regional offices.</p>
                            <p className="ml-5"> <FontAwesomeIcon icon  ={faCheckCircle} className="text-success"/> We speak Arabic, English, French.</p>
                            <p className="ml-5"> <FontAwesomeIcon icon  ={faCheckCircle} className="text-success"/> Solutions for all budgets, including free options!</p><hr/>

                        </Col>
                    </Row>

                </Container>
                <Container>
                    <h2 className="mt-5 mb-3 cvHeading2 text-center"><strong>Frequently Asked Questions</strong></h2>
                      <Accordion>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Q. How do I find and hire employees using Bayt.com?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Searching, screening, and hiring great employees using Jobcar.com is very easy. We provide you with several recruitment tools that are highly advanced and powered by artificial intelligence. .

                                    You can access these hiring solutions to find great employees:

                                    Job postings to advertise your vacancies and to receive many relevant applicants.
                                    CV Search to find your ideal candidate from a large CV database.
                                    Source2Hire to request assisted recruitment services from our talent sourcing experts.
                                    Bayt.com can also support your hiring process through an applicant tracking system, various talent assessments and testing tools, as well as an employee onboarding platform.
                                    </Card.Body>
                             </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Q. How much does it cost to hire employees using Bayt.com?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>We have many hiring solutions that support companies of all sizes, needs, and budgets. Our solutions include monthly small business subscriptions and even free hiring tools.

                                We understand that cost is an important factor in the recruitment process. That’s why all of our hiring technologies are designed to maximize your ROI by giving you plenty of choice, speed, and ease of use. We want to ensure you are able to reduce the cost per hire at your company, which is why we work with you to understand your individual needs and provide you with the most cost-effective hiring plans. Feel free to get in touch with us for more pricing information.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                          Q. How much does it cost to hire employees using Bayt.com?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>Yes, Bayt.com has the largest CV database that you can find in the Gulf and the Middle East region. With millions of CVs, you can find candidates for all career levels, industries, skills, residence locations, and educational background.

Our highly advanced CV Search technology allows you to conduct specific searches to find the exact type of employee you wish to hire.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                Q. Is Jobcar.com a recruitment agency?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>No. Jobcar.com provides recruitment technologies that are designed to make your hiring process as easy and as cost-effective as possible. We love to give you access to these tools so you can find the exact type of employee you are looking for. You are in full control of which candidates you screen, shortlist, interview, and offer a job to.

If you require extra support in finding talent, our Source2Hire experts can conduct the CV search and screening process on your behalf and present you with a shortlist of qualified, relevant, and available candidates to interview from.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                Q. In which countries doesJobcar.com help me hire employees?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>Jobcar.com is highly used across the Middle East and North Africa but is also the recruitment technology provider for many companies across the world. Thousands of companies use Bayt.com to hire in Dubai, Abu Dhabi, Riyadh, Jeddah, Dammam, Kuwait, Qatar, Bahrain, Jordan, Lebanon, Egypt, Iraq, Morocco, and more.

You can try CV Search and look for top candidates by your target location.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                            

                </Container>
               <Container>
               <h4 className="mt-5 mb-3 cvHeading2 text-center">Contact Us</h4>
                   <Row className="text-center">
                       <Col className="text-center">
                       <p>Ph:0966 123456789</p>
                                 <p>Ph:0966 123456789</p>
                                 <p>Ph:0966 123456789</p>
                                 <p>Email: Jobcar@gmail.com</p><br/>
                       </Col>
                       <Col>
                       <img style={{width:'200px'}} src={calCenter} alt="calcenter"/>
                       </Col>
                       <Col>
                       <p>Ph:0966 123456789</p>
                                 <p>Ph:0966 123456789</p>
                                 <p>Ph:0966 123456789</p>
                                 <p>Email: Jobcar@gmail.com</p><br/>
                       </Col>
                       </Row>
              

                   
                               
                   
               
               </Container>
                        
                        
                        
            </Fragment>
        );
    }
}

export default PostJob;