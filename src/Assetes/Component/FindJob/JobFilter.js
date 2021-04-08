import React,{useState} from 'react'
import { Container, Row,Col, Button,Accordion ,Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faAngleDown, faArrowDown, faFilter} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


export default function JobFilter() {
    const links=[
          {  link:'Saudi Arab (215)'},
          {  link:'Katar (215)'},
          {  link:'Quate (215)'},
          {  link:'Usa (215)'},
          {  link:'lala (215)'},
        
          
    ]
    const citys=[
        {city:'Riyadh (215)'},
        {city:'Riyadh (215)'},
        {city:'Riyadh (215)'},
        {city:'Riyadh (215)'},
        {city:'Riyadh (215)'},
        {city:'Riyadh (215)'},
    ]
    const cariares=[
        {title:'Entry Level (215)'},
        {title:'Mid carear (215)'},
        {title:'Frasher (215)'},
        {title:'Advance Level (215)'},
       
    ]

    const [toggle, setToggle] = useState(false)
    return (
        <div className="border">
            <h5 className="ml-3"> <FontAwesomeIcon className="ml-3" icon={faFilter} /> Filter</h5>
 
                        <p onClick={()=>setToggle(!toggle)} eventKey="0" className="border-bottom border-top">Country <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} />
                       
                         </p>
                         {
                             toggle &&(
                                
                            
                         links.map(link=>{
                             return(
                                 <li className="ml-3" eventKey="0"><Link to ="#">{link.link}</Link></li>
                             )
                         }) 
                             )  
                        }
                        <p onClick={()=>setToggle(!toggle)} eventKey="1"className="border-top border-bottom">City <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p>
                        {
                            toggle &&(
                         citys.map(city=>{
                             return(
                                 <li className="ml-3" eventKey="1"><Link to ="#">{city.city}</Link></li>
                             )
                         })  
                            ) 
                        }
                        <p onClick={()=>setToggle(!toggle)} eventKey="2"className="border-top border-bottom">Aria <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p>
                        {
                            toggle &&(
                                links.map(link=>{
                                    return(
                                        <li className="ml-3" eventKey="2"><Link to ="#">{link.link}</Link> </li>
                                    )
                                })  
                            )
                          
                        }
                       
                        <p onClick={()=>setToggle(!toggle)} eventKey="3" className="border-top border-bottom">Industry <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p>
                        {
                            toggle &&(
                                links.map(link=>{
                                    return(
                                        <li className="ml-3"  eventKey="3"><Link to ="#">{link.link}</Link></li>
                                    )
                                })  
                            )
                          
                        }
                        <p onClick={()=>setToggle(!toggle)} eventKey="4"className="border-top border-bottom">Cereer Level <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p>
                        {
                             toggle &&(
                                cariares.map(cariare=>{
                                    return(
                                        <div>
                                           <li className="ml-3"  eventKey="4"><Link to ="#">{cariare.title}</Link></li>
                                            
                                        </div>
                                        
                                    )
                                })   
                             )
                         
                        }
                         
        </div>
    )
}
