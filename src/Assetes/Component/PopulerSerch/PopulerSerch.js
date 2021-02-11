import React, {Component, Fragment} from 'react';
import {Button, Container} from "react-bootstrap";

class PopulerSerch extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className=" popSearch text-center">
                   <h2> Popular Searches in Saudi Arabia</h2>
                    <div className="popSearch">
                        <Button variant="outline-primary">exclusive jobs</Button>{' '}
                        <Button variant="outline-primary">jobs for saudi national</Button>{' '}
                        <Button variant="outline-primary">part time jobs</Button>{' '}
                        <Button variant="outline-primary">fresher/entry level jobs</Button>{' '}
                    </div>

                </Container>

            </Fragment>
        );
    }
}

export default PopulerSerch;