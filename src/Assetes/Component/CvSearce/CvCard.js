import React, { Component, Fragment } from 'react'
import { Col, Container, Row,Card,Button } from 'react-bootstrap'
import axios from 'axios'

export default class CvCard extends Component {

    

    render() {
       const name="Recipient Name"
       
        const add="Recipient Street Address"
        const city= "Recipient City, ST Zip"
       const name2=" Dear [Recipient Name]"
      const description=  
         " Want to put your own image in the circle?  It is easy!  Select the image and do a right mouse click.  Select “Fill” from the shortcut menu.  Choose Picture… from the list.  Navigate your computer to get the appropriate picture.  Click okay to insert your selected image.Once your image has been inserted, select it again.  Go to the Picture Tools Format menu. Click on the down arrow below “Crop” and select “Fill” from the list.  This will auto adjust your image to crop to the image.  You can click and drag your image to place it appropriately.Are you looking for a [job title][Number] years of hands-on experience in [area of expertise]Knowledge of the latest technology in industry or field"
       
       
     
     
       
            
       


        return (
            <Fragment>
                <Container>
                    <Row className="mt-3">
                    <Col xs={12} sm={12} md={6} lg={12}>
                            <Card border="primary" >
                                <Card.Header>{name}</Card.Header>
                                <Card.Body>
                                <Card.Title>{add}</Card.Title>
                                <Card.Text>
                                   {description}
                                </Card.Text>
                                </Card.Body>
                                <Button variant="primary">Go somewhere</Button>
                            </Card>
                        </Col>
                       
                        
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
