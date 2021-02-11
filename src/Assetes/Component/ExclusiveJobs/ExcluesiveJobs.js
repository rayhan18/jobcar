import React,{Component,Fragment}from "react";
import { Container,Button } from "react-bootstrap";


    class ExclusiveJobs  extends Component {
    render(){
        return(
                <Fragment>
                    <Container fluid={true} className="ExclusiveJob">
                        <div className="text-left  text-white ">
                            <h2 className="moreJobsH2">Executive Jobs</h2>
                            <h5>Explore the latest opportunities in top management</h5>
                        </div>
                        <div className="text-right mt-5 ">
                    <Button className="moreJobsButton2 "variant="outline-primary" size="lg">BROWSE MORE JOBS</Button>{' '}
                    </div>
                    </Container>
                    <Container fluid={true} className="ExclusiveJob">
                        <div className="text-left text-white mt-5">
                            <h2 className="moreJobsH2">Executive Jobs</h2>
                            <h5>Explore the latest opportunities in top management</h5>
                        </div>
                        <div className="text-right text-white mt-5 ">
                            <Button className="moreJobsButton3 "variant="outline-primary" size="lg">BROWSE MORE JOBS</Button>{' '}
                        </div>
                    </Container>
                    <Container fluid={true} className="ExclusiveJob">
                        <div className="text-left  text-white mt-5">
                            <h2 className="moreJobsH2">Executive Jobs</h2>
                            <h5>Explore the latest opportunities in top management</h5>
                        </div>
                        <div className="text-right  text-white mt-5 ">
                            <Button className="moreJobsButton3 "variant="outline-primary" size="lg">BROWSE MORE JOBS</Button>{' '}
                        </div>
                    </Container>
                </Fragment>
        );
    }
}
export default ExclusiveJobs;