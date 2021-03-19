import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
 import {faGoogle} from '@fortawesome/free-brands-svg-icons'

 import { faCoffee } from '@fortawesome/free-solid-svg-icons'
class CreatCv extends Component {

    constructor(){
        super()
        this.state={
            fname:'',
            lname:'',
            email:'',
            password:'',
            jobTitle:'',
            fnameError:'',
            lnameError:'',
            emailError:'',
            passwordError:'',
            jobtitleError:''

        }
        this.formValidation=this.formValidation.bind(this)
    }


    formValidation(){
        const fname=this.state.fname
        const lname=this.state.lname
        const email=this.state.email
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const password=this.state.password
        const jobTitle=this.state.jobTitle
        
        if(fname===''){
            this.setState({fnameError:'please enter your fname'})
        }
        else if(lname=== ''){
            this.setState({lnameError:'please enter your lname'})
        }
        // else if(email=== ''){

        // }
        // else if(!(re.test(String(email).toLowerCase()))){
        //     this.setState({emailError:'plase entur your valid email'})
        // }
        else if(password=== ''){
            this.setState({passwordError:'plase entur your valid password'})
        }
        else if(jobTitle=== ''){
            this.setState({jobTitleError:'plase select your job title'})
        }
    }
    render() {
        var btns={marginLeft:"65px"}
        const errorText={
            marginLeft:'150px',
            color:'red'
        }
        const formStyle={
            boxShadow: '1px 8px 8px 8px #888888'
        }
        return (
            <Fragment>
                 <h3   className="cvHeading text-center mb-3">Create a Free Account</h3>
                <Container>
                   
                    <Row >
                        <Col sm={12} md={6} lg={6}>
                            <Form style={formStyle} className="bg-light p-4">
                                <Form.Group as ={Row} controlId ="userName" >
                                    <Form.Label className ="mr-3" column sm="3"> Fast Name </Form.Label>
                                    <Form.Control onChange={(e)=>this.setState({fname:e.target.value})} value={this.state.fname} className="form-controlForm" type ="text" placeholder="Enter your fast Name"/>
                                <small  style={errorText}>{this.state.fnameError}</small>
                                </Form.Group>

                                <Form.Group as ={Row} controlId ="userName">
                                    <Form.Label  className="mr-3" column sm="3"> Last Name  </Form.Label>
                                <Form.Control  onChange={(e)=>this.setState({lname:e.target.value})} value={this.state.lname}className="form-controlForm" type ="text" placeholder="enter your last name"/>
                                <small  style={errorText}>{this.state.lnameError}</small>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formBasicEmail">
                                    <Form.Label className="mr-3" column sm="3">Email Add </Form.Label>
                                    <Form.Control  className="form-controlForm" type="email" placeholder="Enter email" />
                                    {/* <small  style={errorText}>{this.state.emailErro}</small> */}
                                </Form.Group>

                                <Form.Group as ={Row}controlId="formBasicPassword">
                                    <Form.Label className="mr-3" column sm="3">Password  </Form.Label>
                                    <Form.Control onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} className="form-controlForm" type="password" placeholder="Password" />
                                    <small  style={errorText}>{this.state.passwordError}</small>
                                </Form.Group>

                                <Form.Group as ={Row} controlId ="selectItem">
                                    <Form.Label className ="mr-3" column sm="3"> Job Title </Form.Label>
                                    <Form.Control onChange={(e)=>this.setState({jobTitle:e.target.value})} value={this.state.jobTitle} as="select" className="form-controlForm">
                                        <option>Accounting and auditing</option>
                                        <option>administration</option>
                                        <option>architecture</option>
                                        <option>banking</option>
                                        <option>Beauty and faction</option>
                                        <option>Accounting and auditing</option>
                                        <option>administration</option>
                                        <option>architecture</option>
                                        <option>banking</option>
                                        <option>Beauty and faction</option>
                                        <option>Accounting and auditing</option>
                                        <option>administration</option>
                                        <option>architecture</option>
                                        <option>banking</option>
                                        <option>Beauty and faction</option>
                                       
                                    </Form.Control>
                                    <small  style={errorText}>{this.state.jobTitleError}</small>
                                </Form.Group>

                                <Form.Group as = {Row}controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="mr-3" column sm="3">Example textarea </Form.Label>
                                    <Form.Control className="form-controlForm" as="textarea" rows="3" />
                                </Form.Group>

                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Make my profile public to increase my visibility to  employers ${type}`}
                                        />


                                    </div>
                                ))}


                                <Button  onClick={this.formValidation} className =" buttonForm btn-block "variant="primary " size ="lg" type="button" >
                                    process to build your cv
                                </Button>
                                <p>By registering, you confirm that you have read and agree to  jobcar.com <a href="#">Terms and Conditions of Use</a> and <a href="#">Privacy Policy.</a></p>
                            </Form>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h3 className="cvHeading text-center mb-3"> YOUR CHOESE FILD </h3>
                            <h5 className="cvAnatherAccount text-center mb-3"> <Link to="#" >< FontAwesomeIcon icon={faGoogle}/>GOOGLE ACCOUNT</Link> </h5>
                            <h5 className="cvAnatherAccount text-center mb-3"><Link to="#" ><FontAwesomeIcon icon={faCoffee}/> GITHUB</Link> </h5>
                            <p>jobcar.com is the leading job site in the Middle East and North Africa, connecting job seekers with employers looking to hire. Every day, thousands of new job vacancies are listed on the award-winning platform from the region's top employers.</p>

                        </Col>
                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default CreatCv;