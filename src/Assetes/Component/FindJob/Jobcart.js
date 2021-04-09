import React, { Fragment, useEffect, useState } from 'react'
import logo1 from '../../Images/logo1.jpg'
import {Row,Col}from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Jobcart(props) {
   
    const imgStyle={
        width: '100px',
         marginTop:' 22px',
         float:'right',
         marginTop:'-150px',
         display: 'flex'
    }

    const [postDatas,setPostData]= useState([])

    useEffect(()=>{
        const jsonData='https://jsonplaceholder.typicode.com/posts'
        axios.get(jsonData).then(response=>{
         setPostData(response.data)
        }).catch(error=>{
            alert(error.message)
        })
    },[])
    
    return (
        <Fragment>
            <Row >
              {
                   postDatas.map(postData=>{
                       return(
                            <Col className="border jobCart" xs={12} sm={6} md={10} lg={12}>
                            <Link to="/jobdetails">
                            <div   key={postData.id}>
                                    <h5 className="text-primary">{postData.id}.{postData.title}<small style={{color:'tomato'}}> (Riyadh Mar 21)</small> 
                                  {/* <small> Riyadh Mar 21</small>  */}
                                   </h5>
                              <p className="text-secondary ml-5 jobContent" > {postData.body} <br/>
                           <small className="text-info">  Level:Mid Cereer  </small>
                           
                             </p>
                             <img  style={imgStyle}  src={logo1} alt="logo" />
                                </div>
                                </Link>
                </Col>
                
                       
                       )  
              })
                

            }      
                              
                  
                
            </Row><hr/>
                           
                            
        </Fragment>
    )
}
