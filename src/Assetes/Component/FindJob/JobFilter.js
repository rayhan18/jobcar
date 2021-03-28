import React,{useState} from 'react'
import { Container, Row,Col, Button,Accordion ,Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {faAngleDown, faArrowDown, faFilter} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


export default function JobFilter() {
    const links=[
          {  link:'Saudi Arab (215)'},
          {  link:'Katar (215)'},
          {  link:'Quate (215)'},
          {  link:'Usa (215)'},
          {  link:'lala (215)'},
          { moreLink:'More Link'},
          
    ]
    const citys=[
        {city:'Riyadh (215)'},
        {city:'Riyadh (215)'},
        {city:'Riyadh (215)'},
        {city:'Riyadh (215)'},
        {city:'Riyadh (215)'},
        {city:'Riyadh (215)'},
    ]

    const [toggle, setToggle] = useState(false)
    return (
        <div className="border">
            <h5 className="ml-3"> <FontAwesomeIcon className="ml-3" icon={faFilter} />Filter</h5>
                       
                       {/* <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            Click me!
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            Click me!
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion> */}

                        <p onClick={()=>setToggle(!toggle)} eventKey="0" className="border-bottom border-top">Country <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} />
                       
                         </p>
                         {
                             toggle &&(
                                
                            
                         links.map(link=>{
                             return(
                                 <li className="ml-3" eventKey="0">{link.link}</li>
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
                        <p className="border-top border-bottom">Aria <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p>
                        {
                         links.map(link=>{
                             return(
                                 <li className="ml-3">{link.link}</li>
                             )
                         })   
                        }
                       
                        <p className="border-top border-bottom">Industry <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p>
                        {
                         links.map(link=>{
                             return(
                                 <li className="ml-3">{link.link}</li>
                             )
                         })   
                        }
                        <p className="border-top border-bottom">Cereer Level <FontAwesomeIcon className="float-right mr-2" icon={faAngleDown} /></p>
                        {
                         links.map(link=>{
                             return(
                                 <div>
                                    <li className="ml-3">{link.link}</li>
                                      <p>{link.moreLink}</p>
                                 </div>
                                 
                             )
                         })   
                        }
                         
        </div>
    )
}
// unction App() {
//     const [activeIndex, setActiveIndex] = React.useState(0);
  
//     const handleOnClick = index => {
//       setActiveIndex(index); // remove the curly braces
//     };
  
//     const boxs = [0, 1, 2, 3];
//     const box = boxs.map((el, index) => {
//       return (
//         <button
//           key={index}
//           onClick={() => handleOnClick(index)} // pass the index
//           className={activeIndex === index ? "active" : "unactive"}
//         >
//           {el}
//         </button>
//       );
//     });
//     return <div className="App">{box}</div>;
//   }
  
//   ReactDOM.render( <App /> , document.getElementById('root'))
//   .active {
//     background-color: green
  //}