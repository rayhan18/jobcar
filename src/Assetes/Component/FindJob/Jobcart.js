import React, { Fragment, useEffect, useState } from 'react'
import logo1 from '../../Images/logo1.jpg'
import {Row,Col}from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Jobcart(props) {
   
    const imgStyle={
        width: '100px',
         marginTop:' 22px'
    }

    const [postDatas,setPostData]= useState([])

    useEffect(()=>{
        const jsonData='https://jsonplaceholder.typicode.com/posts'
        axios.get(jsonData).then(response=>{
         setPostData(response.data)
        }).catch(error=>{
            alert(error.message)
        })
    },[0])
    
    return (
        <Fragment>
            <Row >
              {
                   postDatas.map(postData=>{
                       return(
                            <Col  xs={12} sm={6} md={10} lg={12}>
                            <Link to="#">
                            <div  className="jobCart d-flex" key={postData.id}>
                                    <h5 className="text-primary">{postData.title} <br/>
                                  <small> Riyadh Mar 21</small>  </h5>
                              <p className="text-secondary ml-5"> {postData.body} 
                             Level:Mid Cereer<br/>  
                             </p>
                             <img  style={imgStyle}  src={logo1} alt="logo" />
                                </div>
                                </Link>
                </Col>
                // <Col className=" border-bottom"xs={12} sm={6} md={2} lg={2}>
                // <img style={imgStyle}  src={logo1} alt="logo" />
                // </Col> 
                       
                       )  
              })
                

            }      
                              
                  
                
            </Row><hr/>
                           
                            
        </Fragment>
    )
}
