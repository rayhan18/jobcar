import React, { useState,useEffect } from 'react'
import axios from 'axios'
export default function FindJobByCountry() {

const [countrys,setCountrys]=useState([])
useEffect(() => {
    const url=' http://www.geognos.com/api/en/countries/info/FR.json'
   

   axios.post(url).then(response=>{
       console.log(response.data)
    //    setCountrys(response.data)
   }).catch(error=>{
       alert(error.message)
   })
    
}, [])
 

   

    return (
        <div>
            {
            countrys.map(country=>{
                return(
                    <div key={country.id}>
                        <p>{country.name}</p>
                        <img src={country.flag}/>
                    </div>
                )
            })
            
            }
        </div>
    )
}
