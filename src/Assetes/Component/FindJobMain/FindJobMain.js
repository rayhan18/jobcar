import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class FindJobMain extends Component {

    myDataChild=(data)=>{
        return <option>{data}</option>
    }
    render() {
const Country=[
    ' Afghanistan', ' Albania', ' Algeria', ' Andorra', ' Angola', ' Antigua and Barbuda',
        'Argentina', ' Armenia',
       ' Australia', 'Austria', 'Azerbaijan', ' The Bahamas', ' Bahrain', 'Bangladesh', ' Barbados',
       ' Belarus', 'Belgium', 'Belize', ' Benin', ' Bhutan', 'Bolivia',
        'Bosnia and Herzegovina', 'Botswana', ' Brazil', 'Brunei', 'Saudi Arabia'];

        const dataItem=Country.map(this.myDataChild);
        return (
            <Fragment>
                <Container clasName="bg-light">
                    <h2 className="text-center jobHeading"> Most Common Job Roles in the Gulf & Middle East</h2>
                    <div className="divCountry">
                        <select className="findCountryJob">{dataItem}</select>
                    </div>
                </Container >

                <Container>
                    <Row>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                        <Col>
                            <div id="jobBox">
                                <h3 className="mt-3">5</h3>
                                <p>Managment</p>
                            </div>
                        </Col>
                    </Row>
                </Container>





                <Container className="bg-light p-4 mt-2">
                    <h2 className="mt-3 text-center mb-3">Most common title</h2>
                    <h4>Accounting and Auditing</h4>
                <Row className="jobFind">
                    <Col>

                        <a href="/">Accounting and Auditing(3)</a><br/>
                        <a href="/">Civil Engineering(4)</a><br/>
                        <a href="/">Civil Engineering(5)</a><br/>
                        <a href="/">Civil Engineering(6)</a><br/>
                        <a href="/">Civil Engineering(7)</a><br/>
                    </Col>
                    <Col>
                        <a href="/">Customer Service and Call Center(8)</a><br/>
                        <a href="/">Engineering(7)</a><br/>
                        <a href="/">Hospitality and Tourism(6)</a><br/>
                        <a href="/">Administration(5)</a><br/>
                        <a href="/"></a>
                    </Col>
                    <Col>
                        <a href="/">Accounting and Auditing(4)</a><br/>
                        <a href="/">Information Technology(3)</a><br/>
                        <a href="/">Maintenance, Repair, and Technician(5)</a><br/>
                        <a href="/">Purchasing and Procurement(6)</a><br/>
                    <a href="/">Marketing and PR(6)</a><br/>
                        <a href="/">Sales</a><br/>
                        <a href="/">Others</a>
                    </Col>

                </Row>
                </Container>


                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Administration</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                        </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Banking</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Beauty and Fashion</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Chemical Engineering</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Civil Engineering</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Cleaning Services</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Community Services</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Construction and Building</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Construction and Building</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Consulting</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Customer Service and Call Center</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Design, Creative, and Arts</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
                <Container className="bg-light p-4 mt-2">
                    <h4 className="mt-3 mb-n4">Electrical Engineering</h4>
                    <Row className="jobFind">
                        <Col>

                            <a href="/">Accounting and Auditing(3)</a><br/>
                            <a href="/">Civil Engineering(4)</a><br/>
                            <a href="/">Civil Engineering(5)</a><br/>
                            <a href="/">Civil Engineering(6)</a><br/>
                            <a href="/">Civil Engineering(7)</a><br/>
                        </Col>
                        <Col>
                            <a href="/">Customer Service and Call Center(8)</a><br/>
                            <a href="/">Engineering(7)</a><br/>
                            <a href="/">Hospitality and Tourism(6)</a><br/>
                            <a href="/">Administration(5)</a><br/>
                            <a href="/"></a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default FindJobMain;